import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TaskCalendarComponent } from './task-calendar/task-calendar.component';
import { CreateRentalContractComponent } from './create-rental-contract/create-rental-contract.component';

const routes: Routes = [
  { path: '', redirectTo:'dashboard', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'sales', component: SalesComponent},
  { path: 'purchase', component: PurchaseComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'calendar', component: TaskCalendarComponent},
  { path: 'create/contract', component: CreateRentalContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
