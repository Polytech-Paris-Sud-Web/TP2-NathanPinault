import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { CreateArticle } from '../article/article.component';


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;

  constructor(private fb: FormBuilder, public articleService: ArticleService, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }
  
  create() {
    const newArticle : CreateArticle = this.articleForm.value;
    this.articleService.createArticle(newArticle).subscribe( {next: () => {
      console.log("Added");
      this.router.navigateByUrl('/');
    }});
  }

  ngOnInit(): void {
  }

}
