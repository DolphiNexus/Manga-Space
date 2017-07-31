 import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RentPage } from '../rent/rent';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  goToRent(){
    this.navCtrl.push(RentPage);
  }
  goToContact(){
    this.navCtrl.push(ContactPage);
  }








}