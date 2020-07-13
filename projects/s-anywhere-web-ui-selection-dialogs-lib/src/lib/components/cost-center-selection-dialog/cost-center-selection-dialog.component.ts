import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { CostCenterSelectionItem } from './models/cost-center-selection-item.model';

import { L10N_LOCALE, L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'sany-web-ui-lib-cost-center-selection-dialog',
  templateUrl: './cost-center-selection-dialog.component.html',
  styleUrls: ['./cost-center-selection-dialog.component.css']
})
export class CostCenterSelectionDialogComponent implements OnInit {

  @Input() dialogDisplayMaximizable: boolean;
  @Input() dialogDisplayPosition: boolean;
  @Input() dialogPosition: string;

  @Input() itemList: Array<CostCenterSelectionItem>;

  // @Input('locale') set inputlocale(value: L10nLocale) {
  //   this._inputlocale = value;
  // }

  @Output() itemSelected = new EventEmitter<CostCenterSelectionItem>();
  @Output() selectionCancelled = new EventEmitter();

  public selectedItem: CostCenterSelectionItem;
  // private _inputlocale: L10nLocale;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService
  ) {


  }


  ngOnInit(): void {

    console.log('Cost-center-selection - ngOnInit');

    // const currentLocale = this.translation.getLocale();

    // console.log('locale.language', currentLocale.language);

    // console.log('this._inputlocale', this._inputlocale);

    // this.translation.setLocale(this._inputlocale).then(() => {
    //   console.log('Cost-center-selection - ngOnInit - setLocale finished');
    //   const currentLocale = this.translation.getLocale();

    //   console.log('locale.language', currentLocale.language);
    //   console.log('this.locale.language', this.locale.language);

    // });


  }

  public onItemSelected() {
    this.dialogDisplayPosition = false;
    console.log('selectedItem', this.selectedItem);
    this.itemSelected.emit(this.selectedItem);
  }

  public onItemSelectionCancelled() {
    this.dialogDisplayPosition = false;
    this.selectedItem = undefined;
    this.selectionCancelled.emit();
  }

  onEmptySelectionClick() {
    this.itemSelected.emit();
  }

}
