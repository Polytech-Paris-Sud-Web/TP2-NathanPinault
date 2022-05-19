import { Injectable } from '@angular/core';
import { Article, CreateArticle } from "./article/article.component"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2-NathanPinault";

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}/articles`);
  }

  public getArticle(id : number | undefined): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/articles/${id}`);
  }

  public deleteArticle(id : number | undefined): Observable<any> {
    return this.http.delete(`${this.baseUrl}/articles/${id}`);
  }

  public createArticle(article: CreateArticle): Observable<any> {
    return this.http.post(`${this.baseUrl}/articles`, article);
  }

  constructor(private readonly http : HttpClient) { }

}
