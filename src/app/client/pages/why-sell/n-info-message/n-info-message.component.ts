import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-n-info-message',
  templateUrl: './n-info-message.component.html',
  styleUrls: ['./n-info-message.component.scss']
})
export class NInfoMessageComponent implements OnInit {
  @Input() enter;

  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  private closeWindow(result: boolean) {
    this.activeModal.close(result);
  }

  onCloseWindow(event) {
    event.stopPropagation();
    this.closeWindow(false);
  }

}
