import { TestBed } from '@angular/core/testing';

import { SAnywhereWebUiSelectionDialogsLibService } from './s-anywhere-web-ui-selection-dialogs-lib.service';

describe('SAnywhereWebUiSelectionDialogsLibService', () => {
  let service: SAnywhereWebUiSelectionDialogsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAnywhereWebUiSelectionDialogsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
