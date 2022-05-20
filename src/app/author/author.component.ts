import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service';

export type Author = Readonly<{
  name: string;
  biography: string;
}>

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input("author")
  author?: Author;

  constructor(public authorService: AuthorService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if(name !== null && name !== undefined) {
      this.authorService.getAuthor(name).subscribe( (authors : Author[]) => {
          this.author = authors[0];
      });
    }
  }
}
