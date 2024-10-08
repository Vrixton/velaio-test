import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { NotificationService } from '../services/notification/notification.service';
import { MatDialogRef } from '@angular/material/dialog';
export interface Skill {
  name: string;
}
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})

export class NewTaskComponent {
  task: FormGroup;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: Skill[] = [];

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private _notification: NotificationService,
    public dialogRef: MatDialogRef<NewTaskComponent>
  ) {

      this.task = this.fb.group({
        name: [null, Validators.required],
        limitDate: [null, Validators.required],
        status: [false, Validators.required],
        personName: [null, Validators.required],
        personAge: [null, Validators.required],
        person: this.fb.array([]),
      });
    }

    announcer = inject( LiveAnnouncer );

    addTask(task: any) {
      const tasksCollection = collection(this.firestore, 'tasks');
      this._notification.showSuccessMessage('Tarea agregada exitosamente');
      this.dialogRef.close();
      return addDoc(tasksCollection, task);
    }

    addPerson(name: string, age: number) {
      const personArray = this.task.get('person') as FormArray;
      const personExists = personArray.controls.some(person => person.get('name')?.value === name);
      if (personExists) {
        this._notification.showSuccessMessage('Esta persona ya existe');
        return;
      }
      personArray.push(this.fb.group({
        name: [name, Validators.required],
        age: [age, Validators.required],
        skills: this.fb.array(this.skills)
      }));
      this.clearPerson();
    }
    clearPerson() {
      this.task.controls['personName'].setValue('');
      this.task.controls['personAge'].setValue('');
      this.skills = [];
    }

    get person() {
      return this.task.get('person') as FormArray;
    }

    add(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
      if (value) {
        this.skills.push({name: value});
      }
      event.chipInput!.clear();
    }
  
    remove(skill: Skill): void {
      const index = this.skills.indexOf(skill);
      if (index >= 0) {
        this.skills.splice(index, 1);
        this.announcer.announce(`${skill} eliminada`);
      }
    }
  
    edit(skill: Skill, event: MatChipEditedEvent) {
      const value = event.value.trim();
      if (!value) {
        this.remove(skill);
        return;
      }
      const index = this.skills.indexOf(skill);
      if (index >= 0) {
        this.skills[index].name = value;
      }
    }

    removePerson(name: string, index: number) {
      const personArray = this.task.get('person') as FormArray;
      if (personArray.length > index) {
        personArray.removeAt(index);
        this._notification.showSuccessMessage(`${name} ha sido eliminado`);
      }
    }

}
