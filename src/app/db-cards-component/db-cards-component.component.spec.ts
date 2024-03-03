import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCardsComponentComponent } from './db-cards-component.component';

describe('DbCardsComponentComponent', () => {
  let component: DbCardsComponentComponent;
  let fixture: ComponentFixture<DbCardsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbCardsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbCardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
