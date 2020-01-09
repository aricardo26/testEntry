import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Breadcrumb} from "../../core/models/Breadcrumb.model";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges {


  @Input() ruta: any;
  @Input() program: string;
  bread: Breadcrumb [];

  constructor() {
    this.bread = new Array<Breadcrumb>();
  }

  ngOnInit() {
    this.breadcrumbFactory();
  }

  ngOnChanges() {
    this.breadcrumbFactory();
  }

  private breadcrumbFactory() {
  }
}
