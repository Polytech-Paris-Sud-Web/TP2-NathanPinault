import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Author, CreateAuthor } from './author/author.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>("http://localhost:3000/authors");
  }

  public getAuthor(name : string | undefined): Observable<Author[]> {
    console.log(`http://localhost:3000/authors?name=${name}`);
    return this.http.get<Author[]>(`http://localhost:3000/authors?name=${name}`);
  }

  public deleteAuthor(name : string | undefined): Observable<any> {
    return this.http.delete(`http://localhost:3000/authors?name=${name}`);
  }

  public createAuthor(author: CreateAuthor): Observable<any> {
    return this.http.post("http://localhost:3000/authors", author);
  }

  constructor(private readonly http : HttpClient) { }
}
