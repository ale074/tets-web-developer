import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface Nav {
  title: string;
  description: string;
}
@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.scss']
})
export class NavigateBarComponent implements OnInit {


  
  items: string[] = ["Hoy","Esta semana","Septiembre"];

  itemsDescription: string[] = ["Septiembre, 21","Septiembre, semana 3","Septiembre, 2021"];


  @Output() newNavEvent = new EventEmitter<Nav>();



  constructor() { }

  ngOnInit(): void {
  }

  navigate(i: number): void {
    //
    for (let j = 0; j < this.items.length; j++) {
      if (j != i) {
        const item: any = document.getElementById("item-nav-"+j);
        item.style.backgroundColor = "#fff";
      } else {
        const item: any = document.getElementById("item-nav-"+j);
        item.style.backgroundColor = "#969696";
        let nav: Nav = {
          title: this.items[j],
          description: this.itemsDescription[j]
        }
        this.NewNav(nav)
      }
      
    }
    
  }

  NewNav(value: Nav) {
    this.newNavEvent.emit(value);
  }

}
