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
  
  focus: boolean;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  delete(){
    this.deletedArticle.emit(this.article);
  }

  detail(){
    this.articleService.getArticle(this.article?.id).subscribe( () => {
      this.router.navigateByUrl(`/article/${this.article?.id}`);
    });
  }

  isDetail() {
    return this.focus;
  }

  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute){
    this.focus = false;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null && (parseInt(id) !== NaN || parseInt(id) !== undefined)) {
      this.articleService.getArticle(parseInt(id)).subscribe( (a : Article) => {
        this.article = a;
      });
      this.focus = true;
    } else {
      this.focus = false;
    }
  }

}