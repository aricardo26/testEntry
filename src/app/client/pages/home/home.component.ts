import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {DialogMessageService} from '../../shared/dialog-message/dialog-message.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  simpleItems: any;
  selectedSimpleItem: any;
  styles: any;
  valueSlide: any;
  totalSlide: any;
  search: boolean;

  constructor(public el: ElementRef, private messageService: DialogMessageService) {
    this.totalSlide = 5;
  }

  ngOnInit() {
    this.search = false;
    this.valueSlide = 1;
    this.simpleItems = ['en desarrollo'];
    this.styles = [
      {id: 1, name: 'Reducido en Lactosa'},
      {id: 2, name: 'Sin Sal'},
      {id: 3, name: 'Reducido en Socio'},
      {id: 4, name: 'Sin Azúcar'},
      {id: 5, name: 'Sin Frutos Secos'},
      {id: 6, name: 'Orgánico'},
      {id: 7, name: 'Sin Glúten'},
      {id: 8, name: 'De Quinta'},
      {id: 9, name: 'Vegano'},
      {id: 10, name: 'Kosher'},
      {id: 11, name: 'Halal'}
    ];
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    this.search = scrollPosition > 500;
  }

  carouselCounter($event) {
    const aux = $event.current.split('-')[2];
    this.valueSlide = Number(aux) + 1;
  }

  openDialog() {
    /*this.messageService.confirm({
      title: 'Confirmación',
      message: 'SANDRA HAUG',
      showcancel: false
    });*/
  }
}
