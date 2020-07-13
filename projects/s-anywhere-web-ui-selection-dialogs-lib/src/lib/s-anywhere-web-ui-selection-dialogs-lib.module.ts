import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostCenterSelectionDialogComponent } from './components/cost-center-selection-dialog/cost-center-selection-dialog.component';
import { MaintenancePlanSelectionDialogComponent } from './components/maintenance-plan-selection-dialog/maintenance-plan-selection-dialog.component';
import { ProcessSelectionDialogComponent } from './components/process-selection-dialog/process-selection-dialog.component';
import { SelectLocationDialogComponent } from './components/select-location-dialog/select-location-dialog.component';
import { SiteSelectionDialogComponent } from './components/site-selection-dialog/site-selection-dialog.component';
import { TestDeviceSelectionDialogComponent } from './components/test-device-selection-dialog/test-device-selection-dialog.component';


import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TestDialogComponent } from './components/test-dialog/test-dialog.component';

import { L10nTranslationModule, L10nIntlModule } from 'angular-l10n';


@NgModule({
  declarations: [
    CostCenterSelectionDialogComponent,
    MaintenancePlanSelectionDialogComponent,
    ProcessSelectionDialogComponent,
    SelectLocationDialogComponent,
    SiteSelectionDialogComponent,
    TestDialogComponent,
    TestDeviceSelectionDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    TableModule,
    ButtonModule,
    TreeTableModule,
    L10nTranslationModule,
    L10nIntlModule
  ],
  exports: [
    CostCenterSelectionDialogComponent,
    MaintenancePlanSelectionDialogComponent,
    ProcessSelectionDialogComponent,
    SelectLocationDialogComponent,
    SiteSelectionDialogComponent,
    TestDialogComponent,
    TestDeviceSelectionDialogComponent
  ]

})
export class SAnywhereWebUiSelectionDialogsLibModule { }
