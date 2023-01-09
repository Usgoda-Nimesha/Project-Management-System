import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-lecturer-dashboard',
  templateUrl: './lecturer-dashboard.component.html',
  styleUrls: ['./lecturer-dashboard.component.css'],
})
export class LecturerDashboardComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUser('/lecturerDashboard').subscribe(
      (res) => {
        this.userDetails = res['user'];
      },
      (err) => {
        alert(err);
      }
    );
  }
}
