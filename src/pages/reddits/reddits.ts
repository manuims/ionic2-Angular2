import { Component,OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {DetailsPage} from  '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage implements OnInit{

items:any;
category:any;
limit:any;
  constructor(public navCtrl: NavController,private redditService:RedditService) {
      this.getDefaults();
  }

  ngOnInit()
  {
      this.getPosts(this.category,this.limit);
  }

  getDefaults()
  {
       if(localStorage.getItem('category') != null)
    {
      this.category = localStorage.getItem('category');
    }
    else
    {
         this.category = 'sports';
    }

    if(localStorage.getItem('limit') != null)
    {
      this.limit = localStorage.getItem('limit');
    }
    else
    {
         this.limit = 10;
    }
     
  }

  getPosts(category,limit)
  {
      this.redditService.getPosts(category,limit).subscribe(
          (resp:any)=>
          {
              //console.log(resp);
              this.items = resp.data.children;
             // console.log(this.items);
          }
      )
  }

  onViewItem(item)
  {
      this.navCtrl.push(DetailsPage,{
          item:item
      });
  }

  onChange()
  {
       this.getPosts(this.category,this.limit);
  }

}
