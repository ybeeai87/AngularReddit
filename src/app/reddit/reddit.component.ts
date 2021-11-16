import { Component, OnInit } from '@angular/core';
import { Child } from '../aww-reddit';
import { AwwService } from '../aww.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css'],
  providers: [AwwService]
})
export class RedditComponent implements OnInit {


PostList: Child[] = [];
post:string = "";

  constructor(private AwwService: AwwService) { }

  ngOnInit(): void {
    this.AwwService.getAll().subscribe((response:any) => {
      this.PostList = response.data.children;
      console.log(this.PostList);
      this.post = response.data.children[0].data.title;
    })

  }
  

}
