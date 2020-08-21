import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DriversRoutingModule } from './drivers.routing'
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { RouterModule } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';
import { HotkeyModule } from 'angular2-hotkeys';
import { ContextMenuModule } from 'ngx-contextmenu';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [DriversListComponent, DriversComponent, DriverProfileComponent],
  imports: [
    SharedModule,
    RouterModule,
    DriversRoutingModule,
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    PagesContainersModule,
    FormsModuleAngular,
    ReactiveFormsModule,
    HotkeyModule.forRoot(),
    LayoutContainersModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    })
  ]
})
export class DriversModule { }
