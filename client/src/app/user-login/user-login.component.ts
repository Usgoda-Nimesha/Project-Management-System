
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm! : FormGroup
  constructor(private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,) {}

  errorMsg: string | undefined;
  submitStatus = false;

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  openRegisterPage() {
    this.router.navigateByUrl('register');
  }

  onSubmit() {
    this.submitStatus = true;
   if(this.loginForm.valid){
    this.userService.login(this.loginForm.value).subscribe(
      (res) => {
        this.userService.setToken(res['token']);

        // decode JWT token and find the role of the user
        const userType = this.userService.findUserType(res['token']);
        console.log(userType);
        // if user is a student redirect to student page
        if (userType == 'student') {
          this.router.navigateByUrl('/studentDashboard');
        }

        // if user is admin
        else if (userType == 'admin') {
          this.router.navigateByUrl('/adminDashboard');
        }

        // if user is lecturer
        else if (userType == 'lecturer') {
          this.router.navigateByUrl('/lecturerDashboard');
        }
      },
      (err) => {
        this.errorMsg = err.error.message;
        alert(this.errorMsg);
      }
    );
   }
  }
}
