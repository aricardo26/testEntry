import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  productDetails: any;
  shops: any;
  inStock: boolean;
  discountPercent: number;
  imageSelected: string;

  constructor() {
  }

  ngOnInit() {
    document.body.style.backgroundColor = '#fcfaf4';

    // esta variable hay que calcularla, me imagino que según existencia en almacén, menos cantidad en el carro,
    // menos las que estan para envío y otras variables.(averiguar)
    this.inStock = true;
    this.discountPercent = 0;

    this.productDetails = {
      id: 531,
      category: 'FRUTAS Y VERDURAS',
      name: 'Organic Maple Syrup',
      images: ['0.jpg', '1.jpg', '2.jpg'],
      cant_sold: 1,
      unit: '236 ml',
      opinions: [{}, {}, {}, {}],
      ratings: [{}, {}],
      price: [85, 73],
      offer: true,
      currency: {
        name: 'Dolar',
        symbol: '$'
      },
      max_byClient: 20,
      styles: [{id: 2}, {id: 5}, {id: 6}],
      details: [
        {
          title: 'Marca',
          desc: 'Coomb`s Family Farmer'
        },
        {
          title: 'Descripción',
          desc: 'El sirope de arce aporta un valor nutricional importante comparado a otros endulzantes. Tiene el índice glucémico más bajo además de propiedades beneficiosas para nuestra salud en general y además es un sabroso complemento para todo tipo de platos.'
        },
        {
          title: 'Recomendaciones de consumo',
          desc: 'La cantidad recomendada para obtener del sirope de arce propiedades beneficiosas es, como máximo de 77 gramos. Cualquier tipo de dieta no debería sobrepasar esta cantidad ya que esta sobrepasa el 10% de calorías en forma de azúcar que hay que tomar, como máximo cada día. El cálculo está basado en una dieta de 2.000 calorías diarias.',
          recomend: 'recomendamos revisar la etiqueta del producto físico'
        },
        {
          title: 'Precauciones',
          desc: 'En general todas las personas pueden utilizarlo como endulzante y agente para dar sabor a postres y frutas aunque si eres una persona con un trastorno relacionado con el azúcar en sangre o necesitas insulina debes vigilar tus niveles de glucosa sanguínea y controlar su uso también en mujeres embarazadas.'
        }
      ],
      nutrition: {
        nutricional_info: [
          {
            title: 'Porción',
            desc: '100 gr (1 cucharada)'
          },
          {
            title: 'Valor energético ',
            desc: '52 kcal'
          }
        ],
        nutricional_details: [
          {
            title: 'Por qué elegir este producto',
            desc: [
              'Podemos encontrar riboflavina (vitamina B12), tiamina (B1) y niacina (B3).',
              'En cuanto a los minerales, el sirope de maple, es una buena fuente de manganeso, zinc, magnesio, calcio y potasio entre otros. Estos minerales se encuentras en mayores cantidades en comparación a otros endulzantes (miel, azúcar negra).',
              'No contiene sodio.',
              'Contiene ácido abscísico (ABA), una fitohormona que protege contra la diabetes y la inflamación.',
              'Otros fitoquímicos que se destacan son los lignanos y cumarinas que se destacan por tener propiedades antioxidante, antiinflamatoria, antimicrobial, anticoagulante y anticancerígena.']
          }
        ]
      }
    };

    this.shops = {
      id: 1,
      name: 'Tina & co',
      images: ['0.svg'],
      address: 'Mendoza 1678 C1428DJP C.A.B.A.',
      opinions: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      ratings: [{}, {}, {}, {}, {}],
      cant_products: 800,
      local_delivery: true,
      home_withdrawal: true
    };

    this.imageSelected = this.productDetails.images[0];

    this.setDiscountPercent();
  }

  selectImage(image) {
    this.imageSelected = image;
  }

  getPrice(type) {
    return this.productDetails.price[this.productDetails.price.length - type];
  }

  setDiscountPercent() {
    const calc = this.productDetails.price[this.productDetails.price.length - 1] * 100 / this.productDetails.price[this.productDetails.price.length - 2];
    this.discountPercent = this.round(calc - 100, 0);
  }

  // usar con datos de total real, solo test ahora

  getPercentToProcess(total, part) {
    return (part * 100 / total).toString() + '%';
  }

  round(numberE, precision) {
    const factor = Math.pow(10, precision);
    const tempNumber = numberE * factor;
    const roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }

}


