import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})



export class StudentRegisterComponent implements OnInit {

  degreeList;

  showSucessMessage: boolean | undefined;
  serverErrorMessages: string | undefined;
  constructor(public userService: UserService,
              private formBuilder:FormBuilder,
              private studentService: StudentService) {}

  registerStudentForm!:FormGroup


  ngOnInit(): void {
    this.registerStudentForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      degreeId:['', Validators.required],

    });

    this.studentService.getDegree().subscribe({
      next:(res)=>{
       this.degreeList = res;

      },
      error:()=>{
        console.log("Error getting degree list");
      }
    })
  }

  registerStudent() {
    const userData = this.registerStudentForm.value;
    userData['role'] = 'student';

    const degreeId = userData["degreeId"];
    delete userData["degreeId"];

    this.userService.postUser(userData).subscribe({
      next:(res)=>{
        var studentDegreeData = this.registerStudentForm.value;
        delete studentDegreeData["firstName"]
        delete studentDegreeData["lastName"]
        delete studentDegreeData["email"]
        delete studentDegreeData["password"]
        delete studentDegreeData["role"]

        studentDegreeData["_id"] = res["_id"];
        studentDegreeData["degreeId"] = degreeId;

        console.log(studentDegreeData)
        this.studentService.assignDegree(studentDegreeData).subscribe({
          next:(res)=>{
            alert("Registration Successfull");
          },
          error:()=>{
            alert("Error registering")
          }
        })

      },
      error:()=>{
        alert("Error registering");
      }
    });
  }
}
