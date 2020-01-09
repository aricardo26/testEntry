import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  @Input() subcategory: boolean;

  // Datas
  deparments: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
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
        img: 'mascotas.jpg',
        name: 'Mascotas',
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
      }
    ];
  }


}
