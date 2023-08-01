// shared-popup.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedPopupService {
  private showPopupSubject = new BehaviorSubject<boolean>(false);
  public showPopup$ = this.showPopupSubject.asObservable();
  private showBackgroundSubject = new BehaviorSubject<boolean>(false);
  public showBackground$ = this.showBackgroundSubject.asObservable();

  togglePopup(show: boolean): void {
    this.showPopupSubject.next(show);
    this.showPopupSubject.next(show);
  }
  toggleBackground(show: boolean): void {
    this.showPopupSubject.next(show);
  }
}
