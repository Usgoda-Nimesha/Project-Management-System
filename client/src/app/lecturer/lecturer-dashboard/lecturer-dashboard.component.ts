import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { UserService } from 'src/app/shared/user.service';
import { AdminService } from 'src/app/shared/admin-service/admin.service';
import { LecturerService } from 'src/app/shared/lecturer-service/lecturer.service';
// angular material
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AddSectionComponent } from '../add-section/add-section.component';

@Component({
  selector: 'app-lecturer-dashboard',
  templateUrl: './lecturer-dashboard.component.html',
  styleUrls: ['./lecturer-dashboard.component.css'],
})
export class LecturerDashboardComponent implements OnInit {
  displayedColumns: String[] = [
    'moduleName',
    'moduleId',
    'duration',
    'edit',
    'delete',
  ];

  userDetails;
  tableWidth = "600px"

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private adminService: AdminService,
    private lecturerService:LecturerService) {}

  ngOnInit(): void {
this.getAllModules()
  }
    // search bar to find specific rows easily
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    getAllModules(){
      this.lecturerService.getModules().subscribe({
        next:(res)=>{
          console.log(res)
          // bind data
        this.dataSource = new MatTableDataSource(res);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        },
        error: () => {
          alert('Error getting module data');
        },
      })
    }

    addSection(row:any){
      this.dialog.open(AddSectionComponent,{width:"30",data:row})
    }
}
