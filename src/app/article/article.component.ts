import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from "../article.service"

export type Article = Readonly<{
  id: number;
  title: string;
  content: string;
  authors: string; 
}>

export type CreateArticle = {
  title: string;
  content: string;
  authors: string; 
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  @Input("article")
  article?: Article;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  delete(){
    this.deletedArticle.emit(this.article);
  }

  detail(){
    this.articleService.getArticle(this.article?.id).subscribe( {next: () => {
      this.router.navigateByUrl(`/article/${this.article?.id}`);
    }});;
  }

  constructor(public articleService: ArticleService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null && (parseInt(id) !== NaN || parseInt(id) !== undefined)) {
      this.articleService.getArticle(parseInt(id)).subscribe( {next: (a) => {
        this.article = a;
        }
      });
    }
  }

}