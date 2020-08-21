import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DriversComponent } from './drivers/drivers.component';
import { CarsComponent } from './cars/cars.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboards' },
      {
        path: 'dashboards',
        loadChildren: () =>
          import('./dashboards/dashboards.module').then(
            (m) => m.DashboardsModule
          ),
      },
      {
        path: 'drivers',
        component: DriversComponent
      },
      {
        path: 'cars',
        component: CarsComponent
      },
      {
        path: 'vendors',
        component: VendorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
