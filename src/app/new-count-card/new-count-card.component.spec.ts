import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCountCardComponent } from './new-count-card.component';

describe('NewCountCardComponent', () => {
  let component: NewCountCardComponent;
  let fixture: ComponentFixture<NewCountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCountCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
