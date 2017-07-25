import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ChildComponent } from '../childcomponents/childcomponent';
import { AppRouteModule } from './app.route';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
