import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  toppings = new FormControl('');
  title = 'velaio-test';
  toppingList: string[] = ['Todas', 'Completadas', 'Pendientes'];
  tasks = [
    {
      name: 'Task 1',
      limitDate: '12/21/12',
      status: 'complete',
      people: [
        {
          name: 'People #1',
          age: 12,
          skills: ['javascript', 'html']
        },
        {
          name: 'People #2',
          age: 20,
          skills: ['angular', 'typescript']
        }
      ]
    },
    {
      name: 'Task 2',
      limitDate: '01/01/24',
      status: 'pending',
      people: [
        {
          name: 'People #1',
          age: 12,
          skills: ['javascript', 'html']
        },
        {
          name: 'People #2',
          age: 20,
          skills: ['angular', 'typescript']
        }
      ]
    },
    {
      name: 'Task 3',
      limitDate: '01/01/24',
      status: 'pending',
      people: [
        {
          name: 'People #1',
          age: 12,
          skills: ['javascript', 'html']
        },
        {
          name: 'People #2',
          age: 20,
          skills: ['angular', 'typescript']
        }
      ]
    }
  ]
}
