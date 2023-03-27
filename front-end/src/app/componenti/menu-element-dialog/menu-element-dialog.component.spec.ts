import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuElementDialogComponent } from './menu-element-dialog.component';

describe('MenuElementDialogComponent', () => {
  let component: MenuElementDialogComponent;
  let fixture: ComponentFixture<MenuElementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuElementDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuElementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
