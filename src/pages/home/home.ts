import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {

  }
  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Successfully Login , welcome ... ',
	  duration: 2000
	 });
	 toast.present();
  }
  openPage() {
	  this.showToastWithCloseButton();
	  this.navCtrl.setPages([{ page: ListPage }]);

  }
 

  

  

}
