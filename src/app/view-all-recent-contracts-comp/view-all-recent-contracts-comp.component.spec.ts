import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRecentContractsCompComponent } from './view-all-recent-contracts-comp.component';

describe('ViewAllRecentContractsCompComponent', () => {
  let component: ViewAllRecentContractsCompComponent;
  let fixture: ComponentFixture<ViewAllRecentContractsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllRecentContractsCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllRecentContractsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
