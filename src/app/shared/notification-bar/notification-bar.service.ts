import { Injectable } from '@angular/core';
import { NotificationBarInputs } from './notification-bar-inputs';

@Injectable({
  providedIn: 'root'
})
export class NotificationBarService {

  constructor() { }

  notificationOptions: NotificationBarInputs = {
    message: '',
    type: 'info'
  }

  displayMessage(
    notificationOptions: NotificationBarInputs
    ): NotificationBarInputs {
    this.notificationOptions = notificationOptions;
    this.notificationOptions.duration? setTimeout(() => this.clearNotification(),
      this.notificationOptions.duration * 1000 ): this.notificationOptions;
    return notificationOptions;
  }

  clearNotification(): NotificationBarInputs {
    return this.notificationOptions = {
      message: '',
      type: 'info'
    }
  }
}
