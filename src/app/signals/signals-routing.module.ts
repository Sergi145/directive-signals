import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignalsLayoutComponent} from "./layout/signals-layout/signals-layout.component";
import {CounterPagesComponent} from "./pages/counter-pages/counter-pages.component";
import {UserInfoPagesComponent} from "./pages/user-info-pages/user-info-pages.component";
import {ProductPageComponent} from "../products/pages/product-page/product-page.component";
import {PropertiesPagesComponent} from "./pages/properties-pages/properties-pages.component";


const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      {
        path: 'counter',
        component: CounterPagesComponent
      },
      {
        path: 'user-info',
        component: UserInfoPagesComponent
      },
      {
        path: 'properties',
        component: PropertiesPagesComponent
      },
      {
        path: '**',
        redirectTo: 'counter'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
