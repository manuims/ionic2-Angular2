import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {RedditsPage} from '../pages/reddits/reddits';
import {settingsPage} from '../pages/settings/settings';
import {RedditService} from './services/reddit.service';
import {DetailsPage} from '../pages/details/details';
import {D3ChartsPage} from '../pages/D3Charts/D3Charts';
import {nvD3} from 'ng2-nvd3';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DownloadsPage } from '../pages/downloads/downloads';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    // ContactPage,
    // HomePage,
    TabsPage,
    RedditsPage,
    settingsPage,DetailsPage,
    D3ChartsPage,nvD3,DownloadsPage
  ],
  imports: [
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    // ContactPage,
    // HomePage,
    TabsPage,
     RedditsPage,
    settingsPage,DetailsPage,
    D3ChartsPage,DownloadsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},RedditService]
})
export class AppModule {}
