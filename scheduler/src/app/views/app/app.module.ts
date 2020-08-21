import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { DriversComponent } from './drivers/drivers.component';
import { CarsComponent } from './cars/cars.component';
import { VendorsComponent } from './vendors/vendors.component';


@NgModule({
  declarations: [AppComponent, DriversComponent, CarsComponent, VendorsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class AppModule { }

