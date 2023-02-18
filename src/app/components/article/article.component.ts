import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { BlogService } from 'src/app/services/blog.service';
import { CommunicationService } from 'src/app/services/communication.service';
import articlesList from '../../../assets/files/blog-list.json';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, AfterViewInit, OnDestroy {
  isOpen: boolean = true;
  destroy$ = new Subject();
  article: any;

  constructor(
    private communicationService: CommunicationService,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.blogService.articleId$
      .pipe(takeUntil(this.destroy$))
      .subscribe((str: string) => {
        let lastChar = parseInt(str.charAt(str.length - 1));

        this.article = articlesList.find(
          (article) => article.article === +lastChar
        );
      });
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  onClose() {
    this.communicationService.setShowNewComponent(false);
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
