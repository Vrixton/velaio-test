import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './services/task/task.service';
import { DatePipe } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';  
import { NotificationService } from './services/notification/notification.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe] 
})

export class AppComponent implements OnInit {
  toppings = new FormControl('');
  title = 'velaio-test';
  toppingList: string[] = ['Todas', 'Completadas', 'Pendientes'];
  tasks: any[] = [];

  constructor(
    public dialog: MatDialog, 
    private _task: TaskService, 
    private datePipe: DatePipe,
    private _notification: NotificationService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  formatTimestamp(firebaseTimestamp: Timestamp): string | null {
    const date = firebaseTimestamp.toDate(); 
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }
  
  newTask() {
    this.dialog.open(NewTaskComponent);
  }

  updateTask(task: any) {
    task.status = !task.status;
    this._task.updateTask(task.id, task).then(data => {
      this._notification.showSuccessMessage(`${task.name} está ${(task.status) ? 'completada' : 'pendiente' }`)
    })
  }

  getTasks() {
    this._task.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

}
