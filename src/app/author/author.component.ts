import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from "../article.service"
import { AuthorService } from '../author.service';

export type Author = Readonly<{
  name: string;
  biography: string;
}>

// If we want to add a user page to create new authors
export type CreateAuthor = {
  name: string;
  biography: string; 
}

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input("author")
  author?: Author;

  constructor(public authorService: AuthorService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if(name !== null) {
      if (name !== undefined) {
        this.authorService.getAuthor(name).subscribe( {next: (a : Author[]) => {
            this.author = a[0];
          }
        });
      }
    }
  }
}
