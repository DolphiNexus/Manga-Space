import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubmitPage } from '../submit/submit';

/**
 * Generated class for the YourLibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-your-library',
  templateUrl: 'your-library.html',
})
export class YourLibraryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourLibraryPage');
  }
  goToSubmit() {
    this.navCtrl.push(SubmitPage, {});
  }

}
