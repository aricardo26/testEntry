import {Component, OnChanges, OnInit} from '@angular/core';
import {Breadcrumb} from '../../../../core/models/breadcrumb.models';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges {

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
    this.bread = [];
    this.bread.push( {name: {en: 'Inicio', es: 'Inicio'}, url: '/'} );
  }
}
