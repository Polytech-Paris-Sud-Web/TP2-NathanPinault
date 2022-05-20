import { Component, OnInit } from '@angular/core';
import { Article } from "../article/article.component"
import { ArticleService } from "../article.service"

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
              
  articles?: Article[];
  
  constructor(public articleService: ArticleService) {

  }

  delete(article: Article) {  
    this.articleService.deleteArticle(article.id).subscribe();
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe( (articles : Article[]) => {
      this.articles = articles.sort( (artcile1 : Article, artcile2 : Article) => artcile2.id - artcile1.id ).slice(0,10); 
    });
  }
}
