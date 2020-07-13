import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SiteSelectionItem } from './models/site-selection-item.model';

@Component({
  selector: 'sany-web-ui-lib-site-selection-dialog',
  templateUrl: './site-selection-dialog.component.html',
  styleUrls: ['./site-selection-dialog.component.css']
})
export class SiteSelectionDialogComponent implements OnInit {

  @Input() dialogDisplayMaximizable: boolean;
  @Input() dialogDisplayPosition: boolean;
  @Input() dialogPosition: string;

  @Input() itemList: Array<SiteSelectionItem>;

  @Output() itemSelected = new EventEmitter<SiteSelectionItem>();
  @Output() selectionCancelled = new EventEmitter();

  public selectedItem: SiteSelectionItem;

  constructor() { }

  ngOnInit(): void {
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
