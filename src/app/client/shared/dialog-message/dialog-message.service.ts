import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


interface ConfirmData {
  title?: string;
  message?: string;
  showcancel?: boolean;
}

@Injectable()
export class DialogMessageService {

  constructor() {
  }

  // constructor(private dialog: MatDialog) {}

  /*public confirm(data: ConfirmData = {}): Observable<boolean> {
    data.title = data.title || 'Confirmar';
    data.message = data.message || 'Esta seguro?';
    data.showcancel = data.showcancel || false;

     let dialogRef: MatDialogRef<DialogMessageComponent>;
     dialogRef = this.dialog.open(DialogMessageComponent, {
       width: '700px',
       id: 'dialog-content',
       disableClose: true,
       data: { title: data.title, message: data.message, opcion: 2, showcancel: data.showcancel }
     });
     return dialogRef.afterClosed();
  }
*/
}
