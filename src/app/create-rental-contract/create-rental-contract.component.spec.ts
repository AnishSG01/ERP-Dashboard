import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRentalContractComponent } from './create-rental-contract.component';

describe('CreateRentalContractComponent', () => {
  let component: CreateRentalContractComponent;
  let fixture: ComponentFixture<CreateRentalContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRentalContractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRentalContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
