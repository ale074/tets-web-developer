import { Component, Input, OnInit } from '@angular/core';
import { Nav } from '../navigate-bar/navigate-bar.component';
interface venta {
  id: string;
  transaccion: string;
  fecha: string;
  metodo: string;
  tipoPago: number,
  monto: string;
  deduccion: string;
}
@Component({
  selector: 'app-table-your-sales',
  templateUrl: './table-your-sales.component.html',
  styleUrls: ['./table-your-sales.component.scss']
})
export class TableYourSalesComponent implements OnInit {

  @Input() nav: Nav = {
    title: "Hoy",
    description: "Septiembre, 21"
  };

  ventas: venta[] =[
    {
      id: "GZEN23784UBV2",
      transaccion: "Cobro exitoso",
      fecha: "04/06/2020 - 17:14:24",
      metodo: "1221 3134 9637 7711",
      tipoPago: 1,
      monto: "$25.000",
      deduccion: "-$1.5000"

    },
    {
      id: "GZEN23784UBV2",
      transaccion: "Cobro exitoso",
      fecha: "04/06/2020 - 17:14:24",
      metodo: "1221 3134 9637 7711",
      tipoPago: 2,
      monto: "$25.000",
      deduccion: "-$1.5000"

    },
    {
      id: "GZEN23784UBV2",
      transaccion: "Cobro exitoso",
      fecha: "04/06/2020 - 17:14:24",
      metodo: "1221 3134 9637 7711",
      tipoPago: 1,
      monto: "$25.000",
      deduccion: "-$1.5000"

    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
