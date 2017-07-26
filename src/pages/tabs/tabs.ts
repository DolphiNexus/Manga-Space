import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { YourLibraryPage } from '../your-library/your-library';
import { ThankYouPage } from '../thank-you/thank-you';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ContactPage;
  tab5Root = YourLibraryPage;
  tab6Root = ThankYouPage;

  constructor() {

  }
}

@Component({
  templateUrl: 'template.html'
})
export class BackgroundPage { }
