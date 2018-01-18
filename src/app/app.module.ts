import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AddstudentPage} from '../pages/addstudent/addstudent';
import {AddstudentintoasubjectPage} from '../pages/addstudentintoasubject/addstudentintoasubject';
import {SearchPage} from '../pages/search/search';
import {TabsPage} from '../pages/tabs/tabs';
import {SubjectlistPage} from '../pages/subjectlist/subjectlist';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatisticsPage} from '../pages/statistics/statistics';

@NgModule({
  declarations: [
    MyApp,
    AddstudentPage,
    AddstudentintoasubjectPage,
    SearchPage,
    SubjectlistPage,
    TabsPage,
    StatisticsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddstudentPage,
    AddstudentintoasubjectPage,
    SearchPage,
    SubjectlistPage,
    TabsPage,
    StatisticsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
