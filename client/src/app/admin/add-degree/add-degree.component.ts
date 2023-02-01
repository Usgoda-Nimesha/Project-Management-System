import { Component, OnInit, Inject } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// service class
import { AdminService } from 'src/app/services/admin-service/admin.service';

@Component({
  selector: 'app-add-degree',
  templateUrl: './add-degree.component.html',
  styleUrls: ['./add-degree.component.css'],
})

export class AddDegreeComponent implements OnInit {
  addDegreeForm!: FormGroup;
  actionType = 'Save';
  title = "Add New Degree"

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddDegreeComponent>,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.addDegreeForm = this.formBuilder.group({
      degreeName: ['', Validators.required],
      degreeId: ['', Validators.required],
      degreeType: ['', Validators.required],
      pace: ['', Validators.required],
      duration: ['', Validators.required],
    });

    if (this.editData) {
      this.title = "Update Degree"
      this.actionType = 'Update';
      this.addDegreeForm.controls['degreeName'].setValue(
        this.editData.degreeName
      );
      this.addDegreeForm.controls['degreeId'].setValue(this.editData.degreeId);
      this.addDegreeForm.controls['degreeType'].setValue(
        this.editData.degreeType
      );
      this.addDegreeForm.controls['pace'].setValue(this.editData.pace);
      this.addDegreeForm.controls['duration'].setValue(this.editData.duration);
    }
  }

  // function to add degrees
  addDegree() {
    if (!this.editData) {
      if (this.addDegreeForm.valid) {
        this.adminService.postDegree(this.addDegreeForm.value).subscribe({
          next: (res) => {
            alert('Degree Added');
            // reset
            this.addDegreeForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Error adding degree');
          },
        });
      }
    } else {

      this.updateDegree();
    }
  }

  // function to update degrees
  updateDegree() {
    this.adminService
      .updateDegree(this.addDegreeForm.value, this.editData._id)
      .subscribe({
        next: (res) => {
          alert('Degree Updated');
          // reset
          this.addDegreeForm.reset();
          this.dialogRef.close('update');
          this.title = "Add New Degree"
        },
      });
  }
}
