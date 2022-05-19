import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Author, CreateAuthor } from './author/author.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseUrl = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2-NathanPinault";

  /*public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>("${this.baseUrl}/authors");
  }*/

  public getAuthor(name : string | undefined): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}/authors?name=${name}`);
  }

  /*public deleteAuthor(name : string | undefined): Observable<any> {
    return this.http.delete(`${this.baseUrl}/authors?name=${name}`);
  }

  public createAuthor(author: CreateAuthor): Observable<any> {
    return this.http.post(`${this.baseUrl}/authors`, author);
  }*/

  constructor(private readonly http : HttpClient) { }
}
