import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
  showSucessMessage: boolean | undefined;
  serverErrorMessages: string | undefined;
  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const userData = form.value;
    userData['role'] = 'student';
    this.userService.postUser(userData).subscribe(
      (res) => {
        this.showSucessMessage = true;
        setTimeout(() => (this.showSucessMessage = false), 400);
      },
      (err) => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Something went wrong';
        }
      }
    );
  }
}
