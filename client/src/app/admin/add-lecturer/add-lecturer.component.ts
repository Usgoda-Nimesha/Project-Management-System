import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/admin-service/admin.service';

@Component({
  selector: 'app-add-lecturer',
  templateUrl: './add-lecturer.component.html',
  styleUrls: ['./add-lecturer.component.css']
})
export class AddLecturerComponent implements OnInit {

  addLecturerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private adminService:AdminService) { }

  ngOnInit(): void {

    this.addLecturerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  registerLecturer(){
    var data = this.addLecturerForm.value;
    data["role"]="lecturer";
    this.adminService.registerLectuurer(data).subscribe({
      next:(res)=>{
        alert("Registered Successfully");
      },
      error:()=>{
        alert("Error adding lecturer");
      }
    })
  }

}
