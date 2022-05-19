import { Injectable } from '@angular/core';
import { Article, CreateArticle } from "./article/article.component"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  //Start of TP1
  /*public getArticles() : Article[] {
    return [{
      id:1,
      title: 'My First Article',
      content: 'Hello World',
      authors: 'Orangefire'
    }, {
      id:2,
      title: 'Angular component',
      content: 'Angular component looks awesome!',
      authors: 'Orangefire'
    }, {
      id:3,
      title: 'Angular service',
      content: 'I read something about angular service, i will try it soon',
      authors: 'Orangefire'
    }, {
      id:4,
      title: 'Added Article',
      content: 'For test purpose',
      authors: 'Au secours...'
    }];
  }*/

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticle(id : number | undefined): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public deleteArticle(id : number | undefined): Observable<any> {
    return this.http.delete(`http://localhost:3000/articles/${id}`);
  }

  public createArticle(article: CreateArticle): Observable<any> {
    return this.http.post("http://localhost:3000/articles", article);
  }

  constructor(private readonly http : HttpClient) { }

}
