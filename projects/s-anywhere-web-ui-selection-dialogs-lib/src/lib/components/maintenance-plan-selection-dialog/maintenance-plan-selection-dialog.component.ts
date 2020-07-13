import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaintenancePlanSelectionItem } from './models/maintenance-plan-selection-item.model';

@Component({
  selector: 'sany-web-ui-lib-maintenance-plan-selection-dialog',
  templateUrl: './maintenance-plan-selection-dialog.component.html',
  styleUrls: ['./maintenance-plan-selection-dialog.component.css']
})
export class MaintenancePlanSelectionDialogComponent implements OnInit {

  @Input() dialogDisplayMaximizable: boolean;
  @Input() dialogDisplayPosition: boolean;
  @Input() dialogPosition: string;

  @Input() itemList: Array<MaintenancePlanSelectionItem>;

  @Output() itemSelected = new EventEmitter<MaintenancePlanSelectionItem>();
  @Output() selectionCancelled = new EventEmitter();

  public selectedItem: MaintenancePlanSelectionItem;

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
