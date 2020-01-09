import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {filtersType} from '../../../../../core/enums/filtersType.enums';

@Component({
  selector: 'app-filter-type-renderer',
  templateUrl: './filter-type-renderer.component.html',
  styleUrls: ['./filter-type-renderer.component.scss']
})
export class FilterTypeRendererComponent implements OnInit, ViewCell {
  renderValue: any;
  @Input() value: any;    // This hold the cell value
  @Input() rowData: any;  // This holds the entire row object

  constructor() { }

  ngOnInit() {
    this.renderValue = filtersType[this.value];
  }

}
