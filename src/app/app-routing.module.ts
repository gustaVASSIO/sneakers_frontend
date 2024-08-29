import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './pages/brand/brand.component';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { OfferComponent } from './pages/offer/offer.component';

const routes: Routes = [
  { path: 'brands', component: BrandComponent },
  { path: 'login', component: FormLoginComponent },
  { path: 'offer', component: OfferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
