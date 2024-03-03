import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceOnHoldComponentComponent } from './invoice-on-hold-component.component';

describe('InvoiceOnHoldComponentComponent', () => {
  let component: InvoiceOnHoldComponentComponent;
  let fixture: ComponentFixture<InvoiceOnHoldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceOnHoldComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceOnHoldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
