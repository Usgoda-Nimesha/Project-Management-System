import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// components
import { AdminService } from 'src/app/shared/admin-service/admin.service';
import { AddModuleComponent } from '../add-module/add-module.component';

// angular material
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
})
export class ModulesComponent implements OnInit {
  displayedColumns: String[] = [
    'moduleName',
    'moduleId',
    'duration',
    'edit',
    'delete',
  ];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModulesComponent>,
    private adminService: AdminService
  ) {}
  degreeName = this.data.degreeName;
  ngOnInit(): void {
    this.getAllModules();
  }
  // search bar to find specific rows easily
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllModules() {
    this.adminService.getModules(this.data.degreeId).subscribe({
      next: (res) => {
        // bind data
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert('Error getting module data');
      },
    });
  }
}
