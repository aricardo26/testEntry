import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  selector: 'app-filter-values-renderer',
  templateUrl: './filter-values-renderer.component.html',
  styleUrls: ['./filter-values-renderer.component.scss']
})
export class FilterValuesRendererComponent implements OnInit, ViewCell {
  renderValue: any;
  @Input() value: any;    // This hold the cell value
  @Input() rowData: any;  // This holds the entire row object

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

}
