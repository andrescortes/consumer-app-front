import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type Severity = 'success' | 'info' | 'warn' | 'error';

interface INotification {
  content: string;
  severity: Severity;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  _showNotification$ = new Subject<INotification>();
  constructor() {}

  show(severity: Severity, content: string): void {
    this._showNotification$.next({
      content,
      severity,
    });
  }

  getNotification(): Observable<INotification> {
    return this._showNotification$.asObservable();
  }
}
