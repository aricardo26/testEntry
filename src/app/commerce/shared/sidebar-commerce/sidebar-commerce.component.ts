import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-commerce',
  templateUrl: './sidebar-commerce.component.html',
  styleUrls: ['./sidebar-commerce.component.scss']
})
export class SidebarCommerceComponent implements OnInit {
  items: any;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        title: 'RESUMEN',
        icon: 'list-outline',
        link: '/admin'
      },
      {
        title: 'MIS COMPRAS',
        icon: 'shopping-cart-outline',
        expanded: false,
        children: [
          {
            title: 'Mis Pedidos',
            link: '/commerce/pedidos',
            icon: 'home-outline',
          },
          {
            title: 'Preguntas',
            link: '/admin',
            icon: 'home-outline',
          },
        ]
      },
      {
        title: 'MI TIENDA',
        icon: 'home-outline',
        link: '/admin/categories',
      },
      {
        title: 'CONFIGURACION',
        icon: 'settings-2-outline',
        link: '/admin/categories',
      }
    ];
  }

}
