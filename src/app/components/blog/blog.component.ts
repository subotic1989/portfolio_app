import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(
    private communicationService: CommunicationService,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.scrollPosition();
  }

  scrollPosition() {
    const sessionStorage: any = window.sessionStorage;
    const yPosition = +sessionStorage?.getItem('scrollPosition');
    if (yPosition) {
      window.scrollTo(0, yPosition);
      sessionStorage.removeItem('scrollPosition');
    }
  }

  onOpenArticle(article: string) {
    this.blogService.sendArticleId(article);
    this.communicationService.setShowNewComponent(true);
    const yPosition = window.scrollY;
    sessionStorage?.setItem('scrollPosition', yPosition.toString());
  }
}
