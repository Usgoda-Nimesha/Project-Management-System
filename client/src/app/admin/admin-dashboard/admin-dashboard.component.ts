import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// components
import { AddDegreeComponent } from '../add-degree/add-degree.component';
import { AdminService } from 'src/app/shared/admin-service/admin.service';
// angular material
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddModuleComponent } from '../add-module/add-module.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  userDetails;

  // angular table columns
  displayedColumns: String[] = [
    'degreeName',
    'degreeId',
    'degreeType',
    'pace',
    'duration',
    'action',
    'modules',
  ];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.userService.getUser('/adminDashboard').subscribe(
      (res) => {
        this.userDetails = res['user'];
      },
      (err) => {
        alert(err);
      }
    );

    this.getAllDegrees();
  }

  // open add-degree component
  openAddDegree() {
    this.dialog
      .open(AddDegreeComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((value) => {
        if (value == 'save') {
          this.getAllDegrees();
        }
      });
  }
  // open add-module component
  openAddModule(row: any) {
    this.dialog.open(AddModuleComponent, { width: '30%', data: row });
  }
  // display all degrees
  getAllDegrees() {
    this.adminService.getDegree().subscribe({
      next: (res) => {
        // bind the response object as data source
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert('Error fetching degree records');
      },
    });
  }

  // search bar to find specific rows easily
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // send information to edit degree component
  editDegree(row: any) {
    this.dialog
      .open(AddDegreeComponent, { width: '30%', data: row })
      .afterClosed()
      .subscribe((value) => {
        if (value == 'update') {
          this.getAllDegrees();
        }
      });
  }

  // delete degree
  deleteDegree(row: any) {
    this.adminService.deleteDegree(row._id).subscribe((res) => {
      this.getAllDegrees();
    });
  }
}
