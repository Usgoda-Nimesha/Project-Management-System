import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { LecturerService } from 'src/app/services/lecturer-service/lecturer.service';
// angular material
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ViewSubmissionsComponent } from '../view-submissions/view-submissions.component';


@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  projects;

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private lecturerService:LecturerService) {}

  ngOnInit(): void {
     console.log(this.data._id)
     this.lecturerService.getProject(this.data._id).subscribe({
      next:(res)=>{
        this.projects=res;
      },error:()=>{
        alert("Error recieving data");
      }
     })
  }

  viewSubmissions(row:any){
    this.dialog.open(ViewSubmissionsComponent,{
      width:"40%",
      data:row,
    }).afterClosed().subscribe((value)=>{

    })
  }

}
