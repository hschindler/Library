import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProcessSelectionItem } from './models/process-selection-item.model';

@Component({
  selector: 'sany-web-ui-lib-process-selection-dialog',
  templateUrl: './process-selection-dialog.component.html',
  styleUrls: ['./process-selection-dialog.component.css']
})
export class ProcessSelectionDialogComponent implements OnInit {

  @Input() dialogDisplayMaximizable: boolean;
  @Input() dialogDisplayPosition: boolean;
  @Input() dialogPosition: string;

  @Input() itemList: Array<ProcessSelectionItem>;

  @Output() itemSelected = new EventEmitter<ProcessSelectionItem>();
  @Output() selectionCancelled = new EventEmitter();

  public selectedItem: ProcessSelectionItem;

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
