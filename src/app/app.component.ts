import { Component, OnDestroy } from '@angular/core';
import { CommunicationService } from './services/communication.service';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  showNewComponent = false;
  destroy$ = new Subject();

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.isRouteChanged();
    this.showBlogWindow();
  }

  isRouteChanged() {
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: any) => {
        if (event instanceof NavigationEnd && event.url === '/') {
          this.showNewComponent = false;
        }
      });
  }

  showBlogWindow() {
    this.communicationService.showNewComponent$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.showNewComponent = value;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
