import { Component, OnInit, Inject } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LecturerService } from 'src/app/services/lecturer-service/lecturer.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {

  addSectionForm!: FormGroup;
  actionType = 'Save';


  constructor( private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddSectionComponent>,
    private lecturerService:LecturerService) { }

  ngOnInit(): void {
    //console.log(this.editData._id)

    this.addSectionForm = this.formBuilder.group({
      sectionName:["",Validators.required],
      sectionDescription:["",Validators.required],
    });
  }
 addSection(){
  if(!this.editData.sectionName){
    if (this.addSectionForm.valid){
      const data = this.addSectionForm.value
      data["_id"]=this.editData._id
      this.lecturerService.addSection(data).subscribe({
        next:(res)=>{
          alert("Section Added")
        },error:()=>{
          alert("Error adding section")
        }
      })
    }
  }
 }
}
