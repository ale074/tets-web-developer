import { Component, Input, OnInit } from '@angular/core';
import { Nav } from '../navigate-bar/navigate-bar.component';

@Component({
  selector: 'app-total-ventas',
  templateUrl: './total-ventas.component.html',
  styleUrls: ['./total-ventas.component.scss']
})
export class TotalVentasComponent implements OnInit {


  @Input() nav: Nav = {
    title: "Hoy",
    description: "Septiembre, 21"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
