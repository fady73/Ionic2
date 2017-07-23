import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
items = [
      {
        'title': 'Fady',
        'icon': 'contacts',
        'number': '1234567890',
        'img': '../../assets/img/person1.jpg'
      },
      {
        'title': 'Ahmed',
        'icon': 'contacts',
        'number': '1234567890',
        'img': '../../assets/img/person1.jpg'
      },
      {
        'title': 'Mody',
        'icon': 'contacts',
        'number': '1234567890',
        'img': '../../assets/img/person1.jpg'
      },
      {
        'title': 'Kareem',
        'icon': 'contacts',
        'number': '1234567890',
        'img': '../../assets/img/person1.jpg'
      },
      {
        'title': 'Marko',
        'icon': 'contacts',
        'number': '1234567890',
        'img': '../../assets/img/person1.jpg'
      },
      {
        'title': 'Shady',
        'icon': 'contacts',
        'number': '1234567890',
        'img': '../../assets/img/person1.jpg'
      },
      {
        'title': 'Christine',
        'icon': 'contacts',
        'number': '1234567890',
       'img': '../../assets/img/person2.jpg'
      },
      {
        'title': 'Meret',
        'icon': 'contacts',
        'number': '1234567890',
        'img': '../../assets/img/person2.jpg'
      },
      {
        'title': 'Remonda',
        'icon': 'contacts',
        'number': '1234567890',
        'img': '../../assets/img/person2.jpg'
      },
    ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  
  openNavDetailsPage(item) {
   this.navCtrl.push(DetailsPage, { item: item });

  }

}
