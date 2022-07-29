import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  options: string[] = ["Cobro Con datáfono", "Cobros con link de pago", "Ver todos"]
  typeOfCharge: string = "";
  filter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
