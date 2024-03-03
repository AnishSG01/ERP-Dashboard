import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentContractsComponent } from './recent-contracts.component';

describe('RecentContractsComponent', () => {
  let component: RecentContractsComponent;
  let fixture: ComponentFixture<RecentContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentContractsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
