import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNotifPage } from './add-notif';

@NgModule({
  declarations: [
    AddNotifPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNotifPage),
  ],
  exports: [
    AddNotifPage
  ]
})
export class AddNotifPageModule {}
