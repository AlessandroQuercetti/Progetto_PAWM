import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneBarComponent } from './sezione-bar.component';

describe('SezioneBarComponent', () => {
  let component: SezioneBarComponent;
  let fixture: ComponentFixture<SezioneBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SezioneBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
