import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneTavoliComponent } from './sezione-tavoli.component';

describe('SezioneTavoliComponent', () => {
  let component: SezioneTavoliComponent;
  let fixture: ComponentFixture<SezioneTavoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneTavoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SezioneTavoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
