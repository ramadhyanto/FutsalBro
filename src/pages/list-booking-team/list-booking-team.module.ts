import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListBookingTeamPage } from './list-booking-team';

@NgModule({
  declarations: [
    ListBookingTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(ListBookingTeamPage),
  ],
})
export class ListBookingTeamPageModule {}
