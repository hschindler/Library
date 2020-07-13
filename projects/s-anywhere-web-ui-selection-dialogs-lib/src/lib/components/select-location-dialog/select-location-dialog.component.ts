import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


// import { LocationTreeItemModel } from './models/location-tree-item.model';
import { LocationSelectionItem } from './models/loction-selection-item.model';
import { LocationTreeTableNodeModel } from './models/location-tree-table-node.model';


@Component({
  selector: 'sany-web-ui-lib-select-location-dialog-comp',
  templateUrl: './select-location-dialog.template.html',
  styleUrls: ['./select-location-dialog.component.css']
  // providers: [LocationTreeItemModel]
})
export class SelectLocationDialogComponent implements OnInit {

  // @Output() locationSelected = new EventEmitter<string[]>();
  // @Output() cancel = new EventEmitter<string[]>();

  @Input() dialogDisplayMaximizable: boolean;
  @Input() dialogDisplayPosition: boolean;
  @Input() dialogPosition: string;
  @Input() itemList: Array<LocationTreeTableNodeModel>;


  @Output() itemSelected = new EventEmitter<LocationSelectionItem>();
  @Output() selectionCancelled = new EventEmitter();

  public title = 'Standorte';
  // public locationList: LocationTreeItemModel[];
  // public selectedLocation: LocationTreeItemModel;

  public selectedTableLocation: LocationTreeTableNodeModel;

  constructor() {

  }


  ngOnInit() {
    // initial nodes
    console.log('LocationSelectionDialog - onInit');
    // this._selectLocationDialogService.loadLocationTreeView().subscribe(nodes => this.locationList = nodes);
  }

  // loadLazyData(event) {
  //     console.log('loadLazyData');
  //     if (event.node) {
  //         // load children of the current node and add the new nodes as children
  //         this._selectLocationDialogService
  //           .getChildrenList(event.node.data, event.node.path).subscribe(nodes => event.node.children = nodes);
  //     }
  // }

  onItemSelected() {
    // console.log('onOkClick:', this.selectedLocation);
    // // this.resourceSelected.next([this.selectedResource.id, this.selectedResource.key, this.selectedResource.name]);
    // if (this.selectedLocation) {
    //   // this.itemSelected.emit([this.selectedLocation.data, this.selectedLocation.path]);
    //   const location = new LocationSelectionItem();
    //   location.id = Number(this.selectedLocation.data);
    //   // location.key = ;
    //   location.name = this.selectedLocation.label;
    //   location.fullHierarchyName = this.selectedLocation.path;
    //   this.itemSelected.emit(location);
    // } else {
    //   this.selectionCancelled.emit();
    // }

    console.log('onOkClick:', this.selectedTableLocation);
    // this.resourceSelected.next([this.selectedResource.id, this.selectedResource.key, this.selectedResource.name]);
    if (this.selectedTableLocation) {
      // this.itemSelected.emit([this.selectedLocation.data, this.selectedLocation.path]);
      const location = new LocationSelectionItem();
      location.id = Number(this.selectedTableLocation.data.id);
      // location.key = ;
      location.name = this.selectedTableLocation.data.label;
      location.fullHierarchyName = this.selectedTableLocation.data.path;
      this.itemSelected.emit(location);
    } else {
      this.selectionCancelled.emit();
    }

  }

  onItemSelectionCancelled() {
    this.selectionCancelled.emit();
  }

  onEmptySelectionClick() {
    this.itemSelected.emit();
  }


}
