import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import Swiper from 'swiper/bundle';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
