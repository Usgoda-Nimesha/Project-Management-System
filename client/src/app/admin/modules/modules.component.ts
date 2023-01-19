import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  actionType = 'Save';
  addModuleForm!: FormGroup;
  editValues = false;
  module_id = '';

  addStatus = false;
  columnNum = 3;
  tableWidth = '900px';

  module: any = {
    moduleId: '',
    moduleName: '',
    duration: '',
  };
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
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModulesComponent>,
    private adminService: AdminService
  ) {}
  degreeName = this.data.degreeName;
  ngOnInit(): void {
    this.getAllModules();
    this.addModuleForm = this.formBuilder.group({
      moduleName: ['', Validators.required],
      moduleId: ['', Validators.required],
      duration: ['', Validators.required],
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

  addModuleStatus() {
    this.setCssProperties();
  }
  setCssProperties() {
    this.addStatus = true;
    this.columnNum = 2;
    this.tableWidth = '600px';
  }
  closeAddModules() {
    this.addStatus = false;
    this.columnNum = 3;
    this.tableWidth = '900px';
    this.getAllModules();
  }

  // populate editable data in the input fields
  editModule(row: any) {
    this.module_id = row._id;

    this.editValues = true;
    this.setCssProperties();
    this.actionType = 'Update';
    this.addModuleForm.controls['moduleId'].setValue(row.moduleId);
    this.addModuleForm.controls['moduleName'].setValue(row.moduleName);
    this.addModuleForm.controls['duration'].setValue(row.duration);
  }

  // update values in database
  updateModule() {
    const data = this.addModuleForm.value;
    data["degreeId"] = this.data.degreeId
    console.log(data)
    this.adminService.editModules(this.addModuleForm.value, this.module_id).subscribe({
      next:(res)=>{
        alert("Module Updated")
        // reset
        this.addModuleForm.reset()
        this.getAllModules()
      }
    });
  }

  // add new module
  addModule() {
    if (!this.editValues) {
      this.addModuleForm.reset()
      const data = this.addModuleForm.value;
      data['degreeId'] = this.data.degreeId;
      this.adminService.postModule(data).subscribe({
        next: (res) => {
          alert('Module added');
          this.addModuleForm.reset();
          this.getAllModules()
        },
        error: () => {
          alert('Error adding module');
        },
      });
    } else {
      this.updateModule();
    }
  }
}
