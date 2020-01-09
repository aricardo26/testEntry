import {AfterViewInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {NavigatorService} from '../../../../core/services/navigator.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() type: string; // promotions, most_seller
  @Input() count: number; // catidad de slides visibles
  @Input() location: boolean; // catidad de slides visibles

  carouselOptions: any;
  carouselClass: Array<string> = [];
  carouselClassPromotions: Array<string> = [];
  language: string;

  // Datas
  promotions: Array<any> = [];

  constructor(private navigatorService: NavigatorService, private sanitizer: DomSanitizer) {

    this.carouselClassPromotions = ['owl-theme', 'row', 'sliding', 'ml-0', 'mr-0'];
    this.carouselClass = ['owl-theme', 'row', 'sliding'];
    this.language = 'en';
  }

  ngOnInit() {
    switch (this.type) {
      case 'promotions':
        this.preCarouselPromotions();
        break;
      case 'most_seller':
        this.preCarouselMostSeller();
        break;

    }

    // document.querySelector('body').style.setProperty('--pillColor', this.color || '#0062cc');
  }

  ngOnChanges() {
    this.preCarouselPromotions();
  }

  ngAfterViewInit() {
  }

  preCarouselMostSeller() {
    this.carouselOptions = {
      // stagePadding: 50,
      margin: 20,
      items: this.count,
      autoWidth: false,
      dots: false,
      navigation: false,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        300: {
          items: 1,
          nav: false,
          loop: true
        },
        1000: {
          nav: false,
          loop: true
        }
      },
      autoplay: true
    };

    if (this.navigatorService.isFirefox()) {
      this.carouselOptions.responsive['1000'].nav = false;
      this.carouselOptions.dots = true;
    }
    this.getMost_Seller();
  }

  preCarouselPromotions() {
    this.carouselOptions = {
      stagePadding: 50,
      margin: 12,
      items: this.count,
      autoWidth: true,
      dots: false,
      navigation: false,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        300: {
          items: 1,
          nav: false,
          loop: true
        },
        1000: {
          nav: true,
          loop: true
        }
      },
      autoplay: true
    };

    if (this.navigatorService.isFirefox()) {
      this.carouselOptions.responsive['1000'].nav = false;
      this.carouselOptions.dots = true;
    }

    switch (this.type) {
      case 'promotions':
        this.getPromotions();
        break;
    }
  }

  getMost_Seller() {
    this.promotions = [
      {
        img: '0120940900028000g01011.jpg',
        price: '788',
        name: 'Nombre del producto completo que puede ser largo, largo',
        details: 'cant d onz/grs, etc',
        location: 'MERCADITO RENE SANS'
      },
      {
        img: 'pack-4-frascos-miel-45-gramos-terra-andes-D_NQ_NP_795116-MLC26467745554_112017-F.jpg',
        price: '800',
        name: 'Nombre del producto completo que puede ser largo, largo',
        details: 'cant d onz/grs, etc',
        location: 'MERCADITO RENE SANS'
      },
      {
        img: 'parma-ham-450w-210993913.jpg',
        price: '802',
        name: 'Nombre del producto completo que puede ser largo, largo',
        details: 'cant d onz/grs, etc',
        location: 'MERCADITO RENE SANS'
      },
      {
        img: 'raw-chicken-legs-spices-garlic-450w-84547900.jpg',
        price: '803',
        name: 'Nombre del producto completo que puede ser largo, largo',
        details: 'cant d onz/grs, etc',
        location: 'MERCADITO RENE SANS'
      },
      {
        img: 'rabano.jpg',
        price: '805',
        name: 'Nombre del producto completo que puede ser largo, largo',
        details: 'cant d onz/grs, etc',
        location: 'MERCADITO RENE SANS'
      },
      {
        img: 'carne_cruda.jpg',
        price: '806',
        name: 'Nombre del producto completo que puede ser largo, largo',
        details: 'cant d onz/grs, etc',
        location: 'MERCADITO RENE SANS'
      },
      {
        img: 'pastaaa.jpg',
        price: '807',
        name: 'Nombre del producto completo que puede ser largo, largo',
        details: 'cant d onz/grs, etc',
        location: 'MERCADITO RENE SANS'
      },
      {
        img: 'pear.jpg',
        price: '808',
        name: 'Nombre del producto completo que puede ser largo, largo',
        details: 'cant d onz/grs, etc',
        location: 'MERCADITO RENE SANS'
      }

    ];
  }

  getPromotions() {
    const scope = this;
    this.promotions = [
      {
        icon: 'icon_1.svg',
        color: '#FF5A01',
        title: 'Cuotas sin interés',
        subtitle: 'Hasta 3 y 6 cuotas de pago',
        text: 'Ver promociones bancarias'
      },
      {
        icon: 'icon_2.svg',
        color: '#F09912',
        title: 'Tarjetas de Crédito',
        subtitle: 'texto link texto limk',
        text: 'texto link texto limk'
      },
      {
        icon: 'icon_3.svg',
        color: '#C4034B',
        title: 'Entrega gratis',
        subtitle: 'con las marcas X X X, YYY, ZZZ',
        text: 'texto link texto link'
      },
      {
        icon: 'icon_4.svg',
        color: '#6B9111',
        title: 'Entrega gratis',
        subtitle: 'con las marcas X X X, YYY, ZZZ',
        text: 'texto link texto link'
      }
    ];
  }


}
