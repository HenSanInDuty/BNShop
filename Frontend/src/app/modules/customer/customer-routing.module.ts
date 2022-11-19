import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGuardService } from '@core/authentication';
import { LayoutComponent } from './components/layout/layout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
      },
      {
        path: 'home',
        component: HomePageComponent,

      },
      {
        path: 'order-detail',
        component: OrderDetailComponent,

      },
      {
        path: 'product',
        component: ProductComponent,

      },
      {
        path: 'product-detail',
        component: ProductDetailComponent,

      },
      {
        path: 'signUp',
        component: SignUpComponent,

      },
      {
        path: 'profile',
        component: ProfileComponent,

      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
