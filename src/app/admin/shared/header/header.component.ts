import { Component, OnInit } from '@angular/core';
import {NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
    this.user = {
      name: 'Alberto Tormos',
      rol: 'Developer'
    };
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
