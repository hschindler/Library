import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSelectionDialogComponent } from './process-selection-dialog.component';

describe('ProcessSelectionDialogComponent', () => {
  let component: ProcessSelectionDialogComponent;
  let fixture: ComponentFixture<ProcessSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
