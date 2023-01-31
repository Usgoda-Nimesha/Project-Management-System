import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// service class
import { AdminService } from 'src/app/services/admin-service/admin.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css'],
})
export class AddModuleComponent implements OnInit {
  // module variable to be recieved from modules-component
  @Input() module!: any;

  actionType = 'Save';
  addModuleForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddModuleComponent>,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.addModuleForm = this.formBuilder.group({
      moduleName: ['', Validators.required],
      moduleId: ['', Validators.required],
      duration: ['', Validators.required],
    });
  }

  addModule() {
    if (!this.module.moduleName) {
      if (this.addModuleForm.valid) {
        const data = this.addModuleForm.value;
        data['degreeId'] = this.editData.degreeId;
        this.adminService.postModule(data).subscribe({
          next: (res) => {
            alert('Module Added');
            this.addModuleForm.reset();
          },
          error: () => {
            alert('Error adding module');
          },
        });
      }
    }
  }
}
