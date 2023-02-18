import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { CommunicationService } from 'src/app/services/communication.service';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(
    private communicationService: CommunicationService,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.scrollPosition();

    let destroyBox: any = document.querySelectorAll(
      '.services__cards--wrapper'
    );

    VanillaTilt.init(destroyBox), { glare: true, 'max-glare': 0.5 };
  }

  scrollPosition() {
    const sessionStorage: any = window.sessionStorage;
    const yPosition = +sessionStorage?.getItem('scrollPosition');
    if (yPosition) {
      window.scrollTo(0, yPosition);
      sessionStorage.removeItem('scrollPosition');
    }
  }

  openService(article: string) {
    this.blogService.sendArticleId(article);
    this.communicationService.setShowNewComponent(true);
    const yPosition = window.scrollY;
    sessionStorage?.setItem('scrollPosition', yPosition.toString());
  }
}
