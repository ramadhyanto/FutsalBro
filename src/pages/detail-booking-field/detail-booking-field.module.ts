import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailBookingFieldPage } from './detail-booking-field';

@NgModule({
  declarations: [
    DetailBookingFieldPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailBookingFieldPage),
  ],
})
export class DetailBookingFieldPageModule {}
