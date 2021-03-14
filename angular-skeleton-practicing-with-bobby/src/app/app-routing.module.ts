import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,        /* Itt nem írjuk ki a / jelet az útnál! */ /* A navigation-nél igen */
  },
  {
    path: 'products', component: ProductsComponent,
  },
  {
    path: '**', component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
