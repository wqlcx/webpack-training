import { Component, OnInit,HostBinding,Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
@Input()article:Article;
// votes:number;
// title:string;
// link:string;
  constructor() {
    this.article = new Article('Angular2','http://angular.io',10);
    // this.title = 'Angular2';
    // this.link = 'http://angular.io';
    // this.votes = 10;
   }

  ngOnInit() {
  }

  voteUp(){
    // this.votes += 1;
    // this.article.votes += 1;
    this.article.voteUp();
    return false;
  }
  voteDown(){
    // this.votes -= 1;
    // this.article.votes -= 1;
    this.article.voteDown();
    return false;
  }

}
