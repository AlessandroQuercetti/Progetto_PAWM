import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuElementDialogComponent } from './add-menu-element-dialog.component';

describe('AddMenuElementDialogComponent', () => {
  let component: AddMenuElementDialogComponent;
  let fixture: ComponentFixture<AddMenuElementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenuElementDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMenuElementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
