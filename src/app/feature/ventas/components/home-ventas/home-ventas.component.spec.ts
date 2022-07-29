import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVentasComponent } from './home-ventas.component';

describe('HomeVentasComponent', () => {
  let component: HomeVentasComponent;
  let fixture: ComponentFixture<HomeVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
