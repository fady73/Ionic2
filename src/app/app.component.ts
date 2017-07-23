import { Component,ViewChild } from '@angular/core';
import { Nav,Platform ,ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  pages: Array<{title: string, icon:string , component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen , public toastCtrl: ToastController) {

    platform.ready().then(() => {
    
    
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
      this.pages = [
      { title: 'Accounts ',icon:'list', component: ListPage  },
      { title: 'Log Out', icon:'log-out', component: HomePage}
    ];
  
  }
   showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Successfully Logout ',
	  duration: 1500
	 });
	 toast.present();
  }
     openPage(page) {
     if(page.component == HomePage)
     {
     this.showToastWithCloseButton();
     }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

