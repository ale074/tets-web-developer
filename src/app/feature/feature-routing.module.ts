import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeVentasComponent } from './ventas/components/home-ventas/home-ventas.component';

const routes: Routes = [
  {
    path: 'ventas',
    component: HomeVentasComponent,
    loadChildren: () => import('./ventas/ventas.module').then(i => i.VentasModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
