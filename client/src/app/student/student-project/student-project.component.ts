import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { StudentService } from 'src/app/shared/student/student.service';

// angular material
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SubmitComponent } from '../submit/submit.component';


@Component({
  selector: 'app-student-project',
  templateUrl: './student-project.component.html',
  styleUrls: ['./student-project.component.css']
})
export class StudentProjectComponent implements OnInit {

  displayedColumns: String[] = [
    'sectionName',
    'sectionDescription',
    'submit'
  ];

  userDetails;
  tableWidth = "600px"

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<StudentProjectComponent>,
    private studentService:StudentService,
    private dialog:MatDialog
   ) { }

  ngOnInit(): void {
    this.studentService.getSection(this.data._id).subscribe(
      (res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err)=>{
        alert(err);
      }
    );
  }

  submitProjects(project:any){
    this.dialog.open(SubmitComponent,{
      width:"50%",
      data:project
    }).afterClosed().subscribe((value)=>{

    })
  }
    // search bar to find specific rows easily
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

}
