import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  model = {
    email: '',
    password: '',
    role: '',
  };

  errorMsg: string | undefined;

  ngOnInit(): void {}

  openRegisterPage() {
    this.router.navigateByUrl('register');
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      (res) => {
        this.userService.setToken(res['token']);

        // decode JWT token and find the role of the user
        const userType = this.userService.findUserType(res['token']);
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
