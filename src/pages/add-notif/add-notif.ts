import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Notifications } from '../../services/notifications';

/**
 * Generated class for the AddNotifPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-notif',
  templateUrl: 'add-notif.html',
})
export class AddNotifPage {

  constructor(private navCtrl: NavController, private notif: Notifications){}
  
  onAddNotif(value: {
    title: string,
    author: string,
    input: string,
  }){
    this.notif.addNotif(value);
    this.navCtrl.pop();
  }

  goBackMenu(){
    this.navCtrl.pop();
  }

}
