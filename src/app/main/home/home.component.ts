import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {
  isChecked: boolean = false;
  // @ViewChild('usefulSwiper', { static: false })
  // usefulSwiper!: SwiperComponent;

  // swiperconfig: SwiperOptions = {
  //   pagination: false,
  //   spaceBetween: 0,
  //   slidesPerView: 'auto'
  // };
  config: any;
  index: any;

  constructor() {
  }

  ngAfterViewInit() {
    // this.usefulSwiper.config = this.swiperconfig;
  }

  ngOnInit(): void {

  }

  doCheck() {
    let html = document.getElementsByTagName('html')[0];
    this.isChecked = !this.isChecked;
    if (this.isChecked == true) {
      html.classList.add('dark-mode');
    } else {
      html.classList.remove('dark-mode');
    }
  }

}
