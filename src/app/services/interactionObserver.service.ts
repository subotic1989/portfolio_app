import { Injectable, ElementRef, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService implements OnDestroy {
  private observer: IntersectionObserver;
  private isIntersectingSubject = new BehaviorSubject<boolean>(false);
  isIntersecting$ = this.isIntersectingSubject.asObservable();

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isIntersectingSubject.next(entry.isIntersecting);
      });
    });
  }

  observe(element: ElementRef): void {
    this.observer.observe(element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
