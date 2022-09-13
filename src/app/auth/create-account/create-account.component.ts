import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationBarService } from 'src/app/shared/notification-bar/notification-bar.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private notificationBar: NotificationBarService,
    private apiService: ApiService,
    public authService: AuthService,
  ) { }

  submitting: boolean = false;
    createAccountForm  = this.formBuilder.group({
      userName: [null,
        [
          Validators.required,
          Validators.pattern(this.authService.userNameRegex)
        ]
      ],
      email: [
        null,
        [
          Validators.email,
          Validators.required
        ]
      ],
      password: [
        null, [
          Validators.pattern(this.authService.userPasswordRegex),
          Validators.required
        ]
      ]
    })


  ngOnInit(): void {
  }

  checkIfUserNameIsTaken(userName: string) {
    return this.apiService.getUserByUserName(userName)
      .subscribe(
        (response) => {
          if (response.data != null) {
            /** to do:  */
            /**
             * display notification saying  username is already
             * taken
             */

            this.createAccountForm.controls['userName'].setErrors({'forbiddenUserName': 'invalid'})
          }
        }
      )
  }

  createUser() {
    console.log(this.createAccountForm.valid)
    this.submitting = true;
    return this.authService.createNewUser(this.createAccountForm.value)
      .subscribe(
        (response) => {
          this.submitting = false;
          this.notificationBar.displayMessage({
            message: response.message,
            type: 'success',
            duration: 5
          })
        },
        (error) => {
          this.submitting = false;
          this.notificationBar.displayMessage({
            message: error.message,
            type: 'error',
            duration: 5
          })
        }
      )

  }

}
