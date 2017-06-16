import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AddNotifPage } from '../add-notif/add-notif';
import { Notifications } from "../../services/notifications";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notificationHome: {
      title: string,
      author: string,
      input: string,
  }[] = [];

  constructor(public navCtrl: NavController, private notif: Notifications) {

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  onLoadAddNotif(){
    this.navCtrl.push(AddNotifPage);
  }

  ionViewWillEnter(){
    this.notificationHome = this.notif.getNotification();
  }

}
