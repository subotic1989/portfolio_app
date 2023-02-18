import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private showNewComponentSource = new Subject<boolean>();
  showNewComponent$ = this.showNewComponentSource.asObservable();

  constructor() {}

  setShowNewComponent(value: boolean) {
    this.showNewComponentSource.next(value);
  }
}
