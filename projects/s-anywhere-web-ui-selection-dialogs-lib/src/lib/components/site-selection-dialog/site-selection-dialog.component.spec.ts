import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSelectionDialogComponent } from './site-selection-dialog.component';

describe('SiteSelectionDialogComponent', () => {
  let component: SiteSelectionDialogComponent;
  let fixture: ComponentFixture<SiteSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
