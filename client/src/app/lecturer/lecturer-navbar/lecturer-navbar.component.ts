import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturer-navbar',
  templateUrl: './lecturer-navbar.component.html',
  styleUrls: ['./lecturer-navbar.component.css']
})
export class LecturerNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  openChat(){
    this.router.navigate(['/lecturerChat']);
  }
  signOut(){
    this.router.navigate(['/login']);
  }
  dashboard(){
    this.router.navigate(['/lecturerDashboard']);
  }
}
