import { Component, OnInit } from '@angular/core';
import { Nav } from '../navigate-bar/navigate-bar.component';

@Component({
  selector: 'app-home-ventas',
  templateUrl: './home-ventas.component.html',
  styleUrls: ['./home-ventas.component.scss']
})
export class HomeVentasComponent implements OnInit {


  NavElement: Nav ={
    title: "hoy",
    description: "Septiembre, 21"
  };
  constructor() { }

  ngOnInit(): void {
  }

  newNav(value: Nav): void {
    //
    this.NavElement = value;
  }

}
