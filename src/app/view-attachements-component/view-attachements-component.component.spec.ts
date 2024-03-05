import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttachementsComponentComponent } from './view-attachements-component.component';

describe('ViewAttachementsComponentComponent', () => {
  let component: ViewAttachementsComponentComponent;
  let fixture: ComponentFixture<ViewAttachementsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAttachementsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAttachementsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
