import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { MainRoutingModule } from './main/main-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '/pagenotfound',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    MainRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
