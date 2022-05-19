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
      console.log("Detail of article n°" + this.article?.id);
      this.router.navigateByUrl(`/article/${this.article?.id}`);
    }});;
  }

  //Start of TP1
  /*public delete(id : number | undefined): void {
    this.articleService.deleteArticle(id).subscribe( {next: () => {
      console.log("Deleted");
    }});
  }*/

  constructor(public articleService: ArticleService, private router: Router, private route: ActivatedRoute){
    //Start of TP1
    /*this.article.id = 0;
    this.article.title = 'First Articles';
    this.article.content = 'Hello world';
    this.article.authors = 'Anonymous';*/
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null) {
      if (parseInt(id) !== NaN || parseInt(id) !== undefined) {
        this.articleService.getArticle(parseInt(id)).subscribe( {next: (a) => {
          console.log("Detail of article n°" + parseInt(id));
          this.article = a;
          }
        });
      }
    }
  }

}