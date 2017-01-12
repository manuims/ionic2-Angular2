import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
item:any
  constructor(public navCtrl: NavController,public navParam:NavParams) {
      this.item =this.navParam.get('item');
  }


}
