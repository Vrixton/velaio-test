import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
})
export class PersonListComponent {
  panelOpenState = false;
  @Input() people: any; 
}
