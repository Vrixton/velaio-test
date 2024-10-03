import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarComponent } from "../../snack-bar/snack-bar.component";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(
    private _snackBar: MatSnackBar,
  ) {}

  showSuccessMessage(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      duration: 2000,
      horizontalPosition: "end",
      verticalPosition: "top",
    });
  }

}
