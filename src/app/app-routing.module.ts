import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { FormLoginComponent } from './form-login/form-login.component';

const routes: Routes = [
  { path:"brands", component: BrandComponent },
  { path:"login", component: FormLoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
