import {Component, inject, Inject} from '@angular/core';
import {MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  styles: [
    `
    :host {
      display: flex;
    }
  `,
  ],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})

export class SnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
  snackBarRef = inject(MatSnackBarRef);
}