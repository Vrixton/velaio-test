import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})

export class NewTaskComponent {
  task: FormGroup;
  constructor(
    private fb: FormBuilder) {
      this.task = this.fb.group({
        name: [null, Validators.required],
        limitDate: [null, Validators.required],
        status: ['pending', Validators.required],
        person: this.fb.array([]),

      });
    }

    addTask(task: any) {
      console.log("tarea agregada -> ", task);
    }

    addPerson() {
      const personArray = this.task.get('person') as FormArray;
      personArray.push(this.fb.group({
        name: ['', Validators.required],
        skills: this.fb.array([])
      }));
    }

    get person() {
      return this.task.get('person') as FormArray;
    }

}
