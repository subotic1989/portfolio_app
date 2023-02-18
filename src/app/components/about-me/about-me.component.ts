import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IntersectionObserverService } from 'src/app/services/interactionObserver.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  @ViewChild('skills') skills: ElementRef;
  @ViewChildren('element') elements: QueryList<ElementRef>;
  private destroy$ = new Subject();

  constructor(private observerService: IntersectionObserverService) {}

  ngOnInit(): void {
    this.initProgressBarAnimation();
  }

  initProgressBarAnimation(): void {
    window.addEventListener('scroll', () => {
      this.observerService.observe(this.skills);
      this.observerService.isIntersecting$
        .pipe(takeUntil(this.destroy$))
        .subscribe((isIntersecting) => {
          this.elements.forEach((element: ElementRef) => {
            element.nativeElement.style.width = !isIntersecting
              ? '0%'
              : element.nativeElement.dataset.progress;
          });
        });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
