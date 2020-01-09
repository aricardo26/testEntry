import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-topics',
  templateUrl: './help-topics.component.html',
  styleUrls: ['./help-topics.component.scss']
})
export class HelpTopicsComponent implements OnInit {

  active: any;

  constructor() { }

  ngOnInit() {
  }

  onShow(type: any) {
    this.active = type;
  }
}
