import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  templateUrl: './carrousel.component.html',
  styles: [`
    @import 'swiper/css';
    @import 'swiper/css/navigation';
    @import 'swiper/css/pagination';
    
    .swiper {
      width: 100%;
      height: 300px; /* Ajusta esta altura según necesites */
    }
    .swiper-slide {
      text-align: center;
      background: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
    }
    .swiper-slide:nth-child(odd) {
      background: #e0e0e0;
    }
  `]
})
export class CarrouselComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  private swiper!: Swiper;

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}