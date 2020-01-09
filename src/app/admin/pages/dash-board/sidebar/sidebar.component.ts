import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items: any;

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/admin',
      },
      {
        title: 'Filtros',
        icon: 'funnel-outline',
        link: '/admin/filters',
      },
      {
        title: 'Categorias',
        icon: 'grid-outline',
        link: '/admin/categories',
      },
      {
        title: 'Nomencladores',
        icon: 'list-outline',
        children: [
          {
            title: 'Unidades',
            link: '/admin/units',
            icon: 'pantone-outline',
          }
        ],
      }
    ];
  }

}
