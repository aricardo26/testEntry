import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() phrase: boolean = true;
  @Input() small: boolean = false;
  @Input() strawberry: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
