import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './main/partials/footer/footer.component';
import { SearchComponent } from './main/search/search.component';
import { MyBookingsComponent } from './main/my-bookings/my-bookings.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { FooterinfoComponent } from './pages/partials/footerinfo/footerinfo.component';
import { HeaderbackComponent } from './pages/partials/headerback/headerback.component';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DetailsComponent } from './pages/details/details.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PagesComponent,
    AuthComponent,
    FooterComponent,
    SearchComponent,
    MyBookingsComponent,
    SigninComponent,
    SignupComponent,
    PagenotfoundComponent,
    FooterinfoComponent,
    HeaderbackComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
