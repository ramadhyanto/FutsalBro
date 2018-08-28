import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListFieldPage } from './list-field';

@NgModule({
  declarations: [
    ListFieldPage,
  ],
  imports: [
    IonicPageModule.forChild(ListFieldPage),
  ],
})
export class ListFieldPageModule {}
