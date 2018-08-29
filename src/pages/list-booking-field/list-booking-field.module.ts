import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListBookingFieldPage } from './list-booking-field';

@NgModule({
  declarations: [
    ListBookingFieldPage,
  ],
  imports: [
    IonicPageModule.forChild(ListBookingFieldPage),
  ],
})
export class ListBookingFieldPageModule {}
