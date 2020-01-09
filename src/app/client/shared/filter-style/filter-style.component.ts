import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-style',
  templateUrl: './filter-style.component.html',
  styleUrls: ['./filter-style.component.scss']
})
export class FilterStyleComponent implements OnInit {

  @Input() styles: any;

  constructor() {
  }

  ngOnInit() {
  }

  iconHover(id) {
    if (document.getElementById('double-anim' + id)) {
      this.doubleAnim('visible', 'hidden');
    } else {
      document.getElementById('svgCircle' + id).classList.add('circle');
    }
  }

  iconLeave(id) {
    if (document.getElementById('double-anim' + id)) {
      this.doubleAnim('hidden', 'visible');
    } else {
      document.getElementById('svgCircle' + id).classList.remove('circle');
    }
  }

  doubleAnim(toggle1, toggle2) {
    if (document.getElementsByClassName('double-anim-true')) {
      Array.prototype.forEach.call(document.getElementsByClassName('double-anim-true'), (el) => {
        el.style.visibility = toggle1;
      });
    }
    if (document.getElementsByClassName('double-anim-false')) {
      Array.prototype.forEach.call(document.getElementsByClassName('double-anim-false'), (el) => {
        el.style.visibility = toggle2;
      });
    }
  }
}
