import { Component } from '@angular/core';

import { RedditsPage } from '../reddits/reddits';
import { AboutPage } from '../about/about';
import { D3ChartsPage } from '../D3Charts/D3Charts';
import { settingsPage } from '../settings/settings';
import { DownloadsPage } from '../downloads/downloads';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RedditsPage;
  tab2Root: any = settingsPage;
   tab3Root: any = D3ChartsPage;
  tab4Root: any = AboutPage;
  tab5Root: any = DownloadsPage;

  constructor() {

  }
}
