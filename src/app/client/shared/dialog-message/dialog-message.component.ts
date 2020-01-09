import {Component, Inject, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {
  }

  // constructor(public dialogRef: MatDialogRef<DialogMessageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  // }

  showDialog(option) {
    this.modalService.open(option, {
      backdropClass: 'background-color: #f0f0f0;',
      centered: true
    });
  }
}
