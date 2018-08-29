import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListBookingPage } from './list-booking';

@NgModule({
  declarations: [
    ListBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(ListBookingPage),
  ],
})
export class ListBookingPageModule {}
