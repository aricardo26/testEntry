import {Injectable} from '@angular/core';
import {NbToastrService} from '@nebular/theme';

@Injectable({providedIn: 'root'})
export class NotificationsService {
  position: string = 'top-right';
  constructor(private toastrService: NbToastrService) {
  }

  showNotificationTR_Success(title, message) {
    // const position = 'top-right';
    const status = 'success';
    this.showNotification(this.position, status, title, message);
  }

  showNotificationTR_Danger(title, message) {
    const status = 'danger';
    this.showNotification(this.position, status, title, message);
  }

  showNotificationTR_Info(title, message) {
    const status = 'info';
    this.showNotification(this.position, status, title, message);
  }

  showNotificationTR_Warning(title, message) {
    const status = 'warning';
    this.showNotification(this.position, status, title, message);
  }

  showNotification(position, status, title, message) {
    this.toastrService.show(
      message,
      title,
      {position, status});
  }


}
