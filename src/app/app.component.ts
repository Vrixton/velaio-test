import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './services/task/task.service';
import { DatePipe } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';  
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
    private datePipe: DatePipe) {}

  ngOnInit(): void {
    this._task.getTasks().subscribe(data => {
      this.tasks = data;
      console.log('Tareas obtenidas:', this.tasks);
    });
  }

  formatTimestamp(firebaseTimestamp: Timestamp): string | null {
    const date = firebaseTimestamp.toDate(); 
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }
  
  newTask() {
    this.dialog.open(NewTaskComponent);
  }

}
