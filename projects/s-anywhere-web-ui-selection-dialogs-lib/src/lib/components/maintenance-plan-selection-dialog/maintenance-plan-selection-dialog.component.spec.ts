import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePlanSelectionDialogComponent } from './maintenance-plan-selection-dialog.component';

describe('MaintenancePlanSelectionDialogComponent', () => {
  let component: MaintenancePlanSelectionDialogComponent;
  let fixture: ComponentFixture<MaintenancePlanSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePlanSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePlanSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
