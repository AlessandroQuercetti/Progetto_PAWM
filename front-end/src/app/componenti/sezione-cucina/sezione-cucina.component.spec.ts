import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneCucinaComponent } from './sezione-cucina.component';

describe('SezioneCucinaComponent', () => {
  let component: SezioneCucinaComponent;
  let fixture: ComponentFixture<SezioneCucinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneCucinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SezioneCucinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
