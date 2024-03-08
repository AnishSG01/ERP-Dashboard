import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { MaterialModule } from '../Material.Module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BodyComponent } from './body/body.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RecentContractsComponent } from './recent-contracts/recent-contracts.component';
import { CountWidgetsComponent } from './count-widgets/count-widgets.component';
import { TaskCalendarComponent } from './task-calendar/task-calendar.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { RecentQuotationsComponent } from './recent-quotations/recent-quotations.component';
import { DeliveryMapComponent } from './delivery-map/delivery-map.component';
import { InvoiceOnHoldComponentComponent } from './invoice-on-hold-component/invoice-on-hold-component.component';
import { DbCardsComponentComponent } from './db-cards-component/db-cards-component.component';
import { CreateRentalContractComponent } from './create-rental-contract/create-rental-contract.component';
import { StatisticsSectionComponent } from './statistics-section/statistics-section.component';
import { ViewAllRecentContractsCompComponent } from './view-all-recent-contracts-comp/view-all-recent-contracts-comp.component';
import { ViewAttachementsComponentComponent } from './view-attachements-component/view-attachements-component.component';
import { EquipmentDataTableComponent } from './equipment-data-table/equipment-data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    DashboardComponent,
    BodyComponent,
    SalesComponent,
    PurchaseComponent,
    InventoryComponent,
    RecentContractsComponent,
    CountWidgetsComponent,
    TaskCalendarComponent,
    MyTasksComponent,
    RecentQuotationsComponent,
    DeliveryMapComponent,
    InvoiceOnHoldComponentComponent,
    DbCardsComponentComponent,
    CreateRentalContractComponent,
    StatisticsSectionComponent,
    ViewAllRecentContractsCompComponent,
    ViewAttachementsComponentComponent,
    EquipmentDataTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
