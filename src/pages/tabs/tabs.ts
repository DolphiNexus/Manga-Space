import { Component } from '@angular/core';

import { RentingPage } from '../renting/renting';
import { ContactPage } from '../contact/contact';
import { RentPage } from '../rent/rent';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { YourLibraryPage } from '../your-library/your-library';
import { ThankYouPage } from '../thank-you/thank-you';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab0Root = HomePage;
  tab2Root = RentPage;
  tab3Root = ContactPage;
  tab5Root = YourLibraryPage;
  tab6Root = ThankYouPage;
  tab7Root = RentingPage;
  tab1Root = AboutPage;

  constructor() {

  }
}

@Component({
  templateUrl: 'template.html'
})
export class BackgroundPage { }
