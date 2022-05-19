import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Author } from './author/author.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  
  private baseUrl = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2-NathanPinault";

  public getAuthor(name : string | undefined): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}/authors?name=${name}`);
  }

  constructor(private readonly http : HttpClient) { }
}
