import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableYourSalesComponent } from './table-your-sales.component';

describe('TableYourSalesComponent', () => {
  let component: TableYourSalesComponent;
  let fixture: ComponentFixture<TableYourSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableYourSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableYourSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
