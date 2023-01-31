import { Component, OnInit, Inject } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LecturerService } from 'src/app/services/lecturer-service/lecturer.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  actionType = "Submit";
  submitProjectForm!:FormGroup;

  constructor( private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SubmitComponent>,
    private studentService:StudentService) { }


  ngOnInit(): void {
    this.submitProjectForm = this.formBuilder.group({
      projectLink:["",Validators.required],
    })
  }

  submitProject(){
    var token:any = localStorage.getItem("token");
    const userPayload = atob(token.split('.')[1]);
    console.log(JSON.parse(userPayload)['_id'])
    let date = new Date()

    var projectDetails = this.submitProjectForm.value
    projectDetails["pid"] = this.data._id
    projectDetails["studentId"] = JSON.parse(userPayload)['_id']
    projectDetails["submissionDate"] = date
    console.log(projectDetails)
    this.studentService.saveProject(projectDetails).subscribe({
      next:(res)=>{
        alert("Assignment submitted successfully");
      },error:()=>{
        alert("Error submitting assignment");
      },
    });
  }

}
