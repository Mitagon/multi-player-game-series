import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationBarService } from 'src/app/shared/notification-bar/notification-bar.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private notificationBar: NotificationBarService
    ) { }

    createAccountForm: FormGroup = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.pattern(this.authService.userPasswordRegex)]
    });

  ngOnInit(): void {
  }

  createUser() {
    return this.authService.createNewUser(this.createAccountForm.value)
      .subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error.message)
          this.notificationBar.displayMessage({
            message: error.message,
            type: 'error',
            duration: 5
          })
        }
      )

  }

}
