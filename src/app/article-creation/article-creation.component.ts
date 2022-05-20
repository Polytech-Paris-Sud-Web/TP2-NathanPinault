import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['A Title', Validators.required ],
      content : ['Some content', Validators.required ],
      authors : ['Anonymous', Validators.required ],
    });
  }
  
  create() {
    const newArticle : CreateArticle = this.articleForm.value;
    this.articleService.createArticle(newArticle).subscribe( () => {
      this.router.navigateByUrl('/');
    });
  }

  ngOnInit(): void {
  }

}
