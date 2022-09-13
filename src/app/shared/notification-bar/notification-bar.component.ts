import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificationBarService } from './notification-bar.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {

  constructor(
    public notificationService: NotificationBarService
  ) { }

  /**
   * handle notification bar closure
   * (If the user clicks/taps to close the notification bar)
   */
  @Output() onCloseNotificationBar = new EventEmitter<any>();

  ngOnInit(): void {
  }

  closeNotificationBar(event: Event): void {
    this.notificationService.clearNotification();
    return this.onCloseNotificationBar.emit(event);
  }

}
