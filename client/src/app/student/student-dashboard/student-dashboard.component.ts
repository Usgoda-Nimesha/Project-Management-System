import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent implements OnInit {
  modules;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUser('/studentDashboard').subscribe(
      (res) => {
      console.log(res)
      this.modules = res
      },
      (err) => {
        alert(err);
      }
    );
  }
}
