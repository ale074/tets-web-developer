import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { HomeVentasComponent } from './components/home-ventas/home-ventas.component';
import { ShareModule } from 'src/app/share/share.module';
import { TotalVentasComponent } from './components/total-ventas/total-ventas.component';
import { NavigateBarComponent } from './components/navigate-bar/navigate-bar.component';
import { FilterComponent } from './components/filter/filter.component';
import { TableYourSalesComponent } from './components/table-your-sales/table-your-sales.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeVentasComponent,
    TotalVentasComponent,
    NavigateBarComponent,
    FilterComponent,
    TableYourSalesComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    ShareModule,
    FormsModule,
  ]
})
export class VentasModule { }
