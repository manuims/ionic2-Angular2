import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService
{
   // http:any;
    constructor(private http:Http)
    {
        //this.http = http;
    }

    getPosts(category,limit)
    {
        return this.http.get('https://www.reddit.com/r'+'/'+category+'/top.json?limit='+limit)
        .map((response:Response)=> response.json());
    }
}