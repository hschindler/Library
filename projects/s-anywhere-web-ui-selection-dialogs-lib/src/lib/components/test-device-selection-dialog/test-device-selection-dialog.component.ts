import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


// models
import { SelectTestDeviceModel } from './models/select-test-device.model';

// services



@Component({
    selector: 'sany-web-ui-lib-test-device-selection-dialog',
    templateUrl: './test-device-selection-dialog.template.html',
    styleUrls: ['./test-device-selection-dialog.component.css'],
    providers: []
})
export class TestDeviceSelectionDialogComponent implements OnInit {
    @Output() itemSelected = new EventEmitter<SelectTestDeviceModel>();
    @Output() selectionCancelled = new EventEmitter<void>();

    @Input() dialogDisplayMaximizable: boolean;
    @Input() dialogDisplayPosition: boolean;
    @Input() dialogPosition: string;

    @Input() itemList: Array<SelectTestDeviceModel>;



    public selectedItem: SelectTestDeviceModel;

    public title = 'Prüfgeräte Liste';
    public pageSize: number;
    public testDeviceList: SelectTestDeviceModel[];
    public totalRecords: number;
    public pageRecords: number;
    public currentPage: number;
    public selectedTestDevice: SelectTestDeviceModel;
    public cols: Array<any>;

    constructor() { }


    // get currentPage() {
    //     return this._resourceListService.currentPage;
    // }



    ngOnInit() {
        this.initiateColumns();
    }

    private initiateColumns() {
        if (!this.cols) {
            this.cols = [];
            this.cols.push({ field: 'key', header: 'KEY', filter: true, style: 200, hidden: false, filterMatchMode: 'contains' });
            this.cols.push({ field: 'name', header: 'NAME', filter: true, style: 300, hidden: false, filterMatchMode: 'contains' });
        }
    }

    onOkClick() {

        this.itemSelected.emit(this.selectedTestDevice);
    }

    onRowDblClick(event: any, item: SelectTestDeviceModel) {
        console.log('onRowDblClick:', item);
        this.itemSelected.emit(this.selectedTestDevice);
    }

    onCancelClick() {

        this.selectionCancelled.emit();
    }

    onEmptySelectionClick() {

        this.itemSelected.emit();
    }



}


