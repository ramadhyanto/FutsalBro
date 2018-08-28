import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListStadiumPage } from './list-stadium';

@NgModule({
  declarations: [
    ListStadiumPage,
  ],
  imports: [
    IonicPageModule.forChild(ListStadiumPage),
  ],
})
export class ListStadiumPageModule {}
