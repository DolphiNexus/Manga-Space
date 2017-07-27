import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RentingPage } from '../pages/renting/renting';
import { ThankYouPage } from '../pages/thank-you/thank-you';
import { YourLibraryPage } from '../pages/your-library/your-library';
import { RentPage } from '../pages/rent/rent';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActionSheetController } from 'ionic-angular';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { HttpModule } from "@angular/http"



@NgModule({
  declarations: [
    MyApp,
    RentingPage,
    ThankYouPage,
    YourLibraryPage,
    RentPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RentingPage,
    ThankYouPage,
    YourLibraryPage,
    RentPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ActionSheetController,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettingsProvider,
    DataServiceProvider,
  ]
})

export class AppModule {}

