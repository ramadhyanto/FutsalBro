import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailFieldPage } from './detail-field';

@NgModule({
  declarations: [
    DetailFieldPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailFieldPage),
  ],
})
export class DetailFieldPageModule {}
