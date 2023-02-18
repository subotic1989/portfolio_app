import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private articleId = new BehaviorSubject<string>('test');
  articleId$ = this.articleId.asObservable();

  constructor() {}

  sendArticleId(value: string) {
    this.articleId.next(value);
  }
}
