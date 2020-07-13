System.register(['@angular/core', 'primeng/primeng', '@angular/router', '../../services/customHttp.service', './services/select-location-dialog.service', './models/location-tree-item.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, primeng_1, router_1, customHttp_service_1, primeng_2, select_location_dialog_service_1, location_tree_item_model_1;
    var SelectLocationDialogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
                primeng_2 = primeng_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customHttp_service_1_1) {
                customHttp_service_1 = customHttp_service_1_1;
            },
            function (select_location_dialog_service_1_1) {
                select_location_dialog_service_1 = select_location_dialog_service_1_1;
            },
            function (location_tree_item_model_1_1) {
                location_tree_item_model_1 = location_tree_item_model_1_1;
            }],
        execute: function() {
            SelectLocationDialogComponent = (function () {
                function SelectLocationDialogComponent(_router, _selectLocationDialogService) {
                    this._router = _router;
                    this._selectLocationDialogService = _selectLocationDialogService;
                    this.locationSelected = new core_1.EventEmitter(false);
                    this.cancel = new core_1.EventEmitter(false);
                    this._title = 'Standorte';
                }
                SelectLocationDialogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //initial nodes
                    this._selectLocationDialogService.getFirstLevelLocationList().subscribe(function (nodes) { return _this._locationList = nodes; });
                };
                SelectLocationDialogComponent.prototype.loadLazyData = function (event) {
                    console.log('loadLazyData');
                    if (event.node) {
                        //load children of the current node and add the new nodes as children
                        this._selectLocationDialogService.getChildrenList(event.node.data, event.node.path).subscribe(function (nodes) { return event.node.children = nodes; });
                    }
                };
                SelectLocationDialogComponent.prototype.onOkClick = function () {
                    this.visible = false;
                    //console.log('onOkClick:' + this._selectedResource.id, this._selectedResource.key, this._selectedResource.name);
                    //this.resourceSelected.next([this.selectedResource.id, this.selectedResource.key, this.selectedResource.name]);
                    this.locationSelected.emit([this._selectedLocation.data, this._selectedLocation.path]);
                };
                SelectLocationDialogComponent.prototype.onCancelClick = function () {
                    this.visible = false;
                    this.cancel.emit([]);
                };
                SelectLocationDialogComponent.prototype.onEmptySelectionClick = function () {
                    this.visible = false;
                    this.locationSelected.emit([undefined, undefined]);
                };
                SelectLocationDialogComponent = __decorate([
                    core_1.Component({
                        selector: 'select-location-dialog-comp',
                        templateUrl: 'app/components/select-location-dialog/select-location-dialog.template.html',
                        styles: [],
                        directives: [primeng_1.DataTable, primeng_1.Column, primeng_1.Button, router_1.ROUTER_DIRECTIVES, primeng_2.Tree],
                        providers: [select_location_dialog_service_1.SelectLocationDialogService, location_tree_item_model_1.LocationTreeItemModel, customHttp_service_1.CustomHttpService, primeng_2.Tree],
                        outputs: ['locationSelected', 'cancel'],
                        inputs: ['visible']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, select_location_dialog_service_1.SelectLocationDialogService])
                ], SelectLocationDialogComponent);
                return SelectLocationDialogComponent;
            }());
            exports_1("SelectLocationDialogComponent", SelectLocationDialogComponent);
        }
    }
});
//# sourceMappingURL=select-location-dialog.component.js.map