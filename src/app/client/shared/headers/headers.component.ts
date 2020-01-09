import {AfterViewInit, Component, DoCheck, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../core/services/authentication.service';
import _ from 'lodash';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('1s 100ms ease-in-out')),
      transition('hide => show', animate('1s 100ms ease-in-out')),
    ]),
    trigger('scrollSearchAnimation', [
      state('open', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('close', style({
        opacity: 0,
        transform: 'translateY(-100%)'
      })),
      transition('open => close', animate('0.5s ease-in-out')),
      transition('close => open', animate('0.5s ease-in-out')),
    ])
  ]
})

export class HeadersComponent implements OnInit, DoCheck {

  @Input() transparent: boolean;
  @Input() search: boolean;
  @Input() account: boolean;
  @Input() notify: boolean;
  @Input() cart: boolean;
  @Input() help: boolean;
  @Input() seller: boolean;
  @Input() login: boolean;
  @Input() shop: boolean;
  @Input() shops: boolean;
  @Input() loguin: boolean;
  @Input() zipcode: boolean;
  @Input() placeholderSearchText: string;
  @Input() placeholderSearch = true;
  showHideSub: boolean;
  state = false;
  stateSearch = false;
  deparmentSelect = '';
  subCategories = [];
  windowSize: string;


  // Datas
  deparments: Array<any> = [];

  @HostListener('window:scroll')
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    this.state = scrollPosition >= componentPosition;
    this.stateSearch = scrollPosition > 500;
  }

  constructor(public el: ElementRef, public route: Router, private auth: AuthenticationService) {
    this.windowSize = '0px';
  }

  ngOnInit() {
    this.windowSize = this.el.nativeElement.parentNode.clientWidth + 'px';
    this.showHideSub = false;
    if (this.placeholderSearch && !this.placeholderSearchText) {
      this.placeholderSearchText = 'Buscar';
    }
    this.deparments = [
      {
        img: 'frutas_verduras.jpg',
        name: 'Frutas & Verduras',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'lacteos_huevos.jpg',
        name: 'Lácteos & Huevos',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'snacks_aperitivos.jpg',
        name: 'Snacks & Aperitivos',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'bebidas.jpg',
        name: 'Bebidas',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'congelados.jpg',
        name: 'Congelados',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'gourmet.jpg',
        name: 'Delicatessen & Gourmet',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'panaderia.jpg',
        name: 'Panadería Repostería',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'alacena.jpg',
        name: 'Alacena',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'carnes_aves.jpg',
        name: 'Carnes & Aves',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'pescados_mariscos.jpg',
        name: 'Pescados &  Mariscos',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'pastas.jpg',
        name: 'Pastas',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'fiambres.jpg',
        name: 'Fiambres',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'comidas_elaboradas.jpg',
        name: 'Comidas Elaboradas',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'suplementos_superalimentos.jpg',
        name: 'Suplementos & Superalimentos',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'belleza.jpg',
        name: 'Belleza',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'accesorios_insumos.jpg',
        name: 'Accesorios & Insumos ',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      },
      {
        img: 'mascotas.jpg',
        name: 'Mascotas',
        subcategory: [
          {name: 'Empaquetadas'},
          {name: 'Frescas'},
          {name: 'Congeladas'},
          {name: 'Desecadas'},
          {name: 'Listas y Preparadas'}
        ]
      }
    ];
  }

  ngDoCheck() {
    if (this.windowSize !== this.el.nativeElement.parentNode.clientWidth + 'px') {
      this.windowSize = this.el.nativeElement.parentNode.clientWidth + 'px';
    }
  }

  logut() {
    this.auth.logout();
  }

  get stateAction() {
    return this.state ? 'show' : 'hide';
  }

  get stateSeachAction() {
    return this.stateSearch ? 'open' : 'close';
  }

  hover(event) {
    this.subCategories = _.filter(this.deparments, {name: event.srcElement.innerText})[0].subcategory;
    this.showHideSub = true;
    this.deparmentSelect = event.srcElement.innerText;
  }

  releaseHover() {
    this.showHideSub = false;
    this.deparmentSelect = '';
  }

  getSubCategories(categoryName) {
    return _.filter(this.deparments, {name: categoryName})[0].subcategory;
  }
}
