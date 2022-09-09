type notificationTypes = 'info' | 'success' | 'warning' | 'error';

export interface NotificationBarInputs {
  /**
   * Notification message
   */
  message: string;
  /**
   * Notification type: info | warning | error | success
  */
  type: notificationTypes;
  /**
   * Duration to display the notification (in seconds)
   * for example, 5 represents 5seconds
  */
  duration?: number;
}
