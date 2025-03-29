import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NotificationService } from '../../services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent implements OnInit, OnDestroy {
  unsub$ = new Subject<void>();

  constructor(
    private readonly messageService: MessageService,
    private readonly noticationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.onChangeNotification();
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  onChangeNotification(): void {
    this.noticationService
      .getNotification()
      .pipe(
        takeUntil(this.unsub$)
      )
      .subscribe((notification) => {
        console.log('Notification: ', notification);
        switch (notification.severity) {
          case 'success':
            this.success(notification.content);
            break;
          case 'error':
            this.error(notification.content);
            break;
          case 'warn':
            this.warning(notification.content);
            break;
          case 'info':
            this.info(notification.content);
            break;
        }
      });
  }

  success(content: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: content,
      key: 'toast',
    });
  }

  error(content: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: content,
      key: 'toast',
    });
  }

  warning(content: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warning',
      detail: content,
      key: 'toast',
    });
  }

  info(content: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: content,
      key: 'toast',
    });
  }
}
