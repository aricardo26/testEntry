import {ChangeDetectionStrategy, Component, ElementRef, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';


@Component({
  selector: 'app-shops-profile',
  templateUrl: './shops-profile.component.html',
  styleUrls: ['./shops-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tabAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('* => *', animate('1s 100ms ease-in-out'))
    ])
  ]
})

export class ShopsProfileComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  tabset = false;

  constructor(public el: ElementRef) {

  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '700px',
        height: '100px',
        thumbnailsColumns: 6,
        image: false
      }
    ];

    this.galleryImages = [
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
      }
    ];

  }

  get tabSetAction() {
    return this.tabset ? 'show' : 'hide';
  }

}

