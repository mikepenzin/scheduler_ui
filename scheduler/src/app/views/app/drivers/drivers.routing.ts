import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';

const routes: Routes = [
  {
    path: '', component: DriversComponent,
    children: [
      // { path: '', redirectTo: 'drivers-list', pathMatch: 'full' },
      { path: '', component: DriversListComponent },
      { path: 'driver/:id', component: DriverProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
