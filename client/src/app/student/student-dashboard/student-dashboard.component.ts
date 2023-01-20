import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

import { StudentService } from 'src/app/shared/student/student.service';

// angular material
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentProjectComponent } from '../student-project/student-project.component';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent implements OnInit {
  modules;
  constructor(private userService: UserService,
    private router: Router,
    private dialog:MatDialog) {}

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

  openProjects(module:any){
       this.dialog.open(StudentProjectComponent,{
        width:"40%",
        data:module
       }).afterClosed().subscribe((value)=>{

       })
  }
}
