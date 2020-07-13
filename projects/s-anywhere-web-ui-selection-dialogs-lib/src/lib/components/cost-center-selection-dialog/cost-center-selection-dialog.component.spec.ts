import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCenterSelectionDialogComponent } from './cost-center-selection-dialog.component';

describe('CostCenterSelectionDialogComponent', () => {
  let component: CostCenterSelectionDialogComponent;
  let fixture: ComponentFixture<CostCenterSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostCenterSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCenterSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
