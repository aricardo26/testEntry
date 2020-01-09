import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NInfoMessageComponent} from './n-info-message/n-info-message.component';

@Component({
  selector: 'app-why-sell',
  templateUrl: './why-sell.component.html',
  styleUrls: ['./why-sell.component.scss']
})
export class WhySellComponent implements OnInit {

  simpleItems: any;
  selectedSimpleItem: any;
  styles: any;
  valueSlide: any = 1;
  totalSlide: any;
  carouselOptions: any;
  parceros: Array<any> = [];

  constructor(private modalService: NgbModal) {
    this.totalSlide = 5;
    this.parceros = [
      '../../../assets/img/logo_tinaco.png',
      '../../../../assets/img/6d52742f-c20c-404e-abb7-67935cc428d3.png',
      '../../../../assets/img/bendito.png',
      '../../../../assets/img/images-1.png',
      '../../../../assets/img/images.png',
      '../../../../assets/img/images-2.jpg',
      '../../../../assets/img/images-4.jpg',
      '../../../../assets/img/images%20(14).jpg'
    ];
    this.carouselOptions = {
      items: this.parceros,
      dots: true,
      navigation: false,
      autoplay: true,
      responsive: {
        0: {
          items: 2,
          nav: true
        },
        576: {
          items: 4,
          nav: false,
          loop: true
        },
        770: {
          items: 6,
          nav: false,
          loop: true
        },
        992: {
          items: 8,
          nav: true,
          loop: true
        }
      },
    };
  }

  ngOnInit() {
    this.simpleItems = [true, 'Two', 3];
    this.styles = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}];
  }

  openMessage(param: any) {
    const modalRef = this.modalService.open(NInfoMessageComponent);
    modalRef.componentInstance.enter = param;
  }

  carouselCounter($event) {
    const aux = $event.current.split('-')[2];
    this.valueSlide = Number(aux) + 1;
  }

}
