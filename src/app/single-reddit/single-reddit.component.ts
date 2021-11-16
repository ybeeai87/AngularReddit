import { Component, OnInit, Input } from '@angular/core';
import { Child, Kind } from '../aww-reddit';

@Component({
  selector: 'app-single-reddit',
  templateUrl: './single-reddit.component.html',
  styleUrls: ['./single-reddit.component.css']
})
export class SingleRedditComponent implements OnInit {
@Input() Post : Child = {} as Child;
  constructor() { }

  ngOnInit(): void {
  }

}
