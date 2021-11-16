import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { SingleRedditComponent } from './single-reddit/single-reddit.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditComponent,
    SingleRedditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
