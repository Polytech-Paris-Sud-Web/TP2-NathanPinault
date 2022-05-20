import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article/article.component';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  articles?: Article[];
  
  constructor(public articleService: ArticleService) {

  }

  search(inputSearch: string) {
    this.articleService.getArticles().subscribe( (articles : Article[]) => {
      this.articles = articles.filter( (article : Article) => article.title.includes(inputSearch) || article.content.includes(inputSearch) ); 
    });
  }

  delete(article: Article) {  
    this.articleService.deleteArticle(article.id).subscribe();
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe( (articles : Article[]) => {
      this.articles = articles.sort( (artcile1 : Article, artcile2 : Article) => artcile1.id - artcile2.id ); 
    });
  }

}