import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountWidgetsComponent } from './count-widgets.component';

describe('CountWidgetsComponent', () => {
  let component: CountWidgetsComponent;
  let fixture: ComponentFixture<CountWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountWidgetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
