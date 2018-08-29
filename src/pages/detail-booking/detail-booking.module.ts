import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailBookingPage } from './detail-booking';

@NgModule({
  declarations: [
    DetailBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailBookingPage),
  ],
})
export class DetailBookingPageModule {}
