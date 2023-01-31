import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentRegisterComponent } from './student-register.component';
import { validRegisterData,emptyRegisterData } from 'src/testData/register';

describe('StudentRegisterComponent', () => {
  let component: StudentRegisterComponent;
  let fixture: ComponentFixture<StudentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
    ],
    providers: [
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }
    ],
      declarations: [ StudentRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   // function to update form values
   function update(firstName,lastName,degreeId,email,password){
    component.registerStudentForm.controls["firstName"].setValue(firstName),
    component.registerStudentForm.controls["lastName"].setValue(lastName),
    component.registerStudentForm.controls["degreeId"].setValue(degreeId),
    component.registerStudentForm.controls["email"].setValue(email),
    component.registerStudentForm.controls["password"].setValue(password)
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // empty input data
  it('Form should be invalid when input data is not provided', (() => {
    update(emptyRegisterData.firstName,
      emptyRegisterData.lastName,
      emptyRegisterData.degreeId,
      emptyRegisterData.email,
      emptyRegisterData.password);

    expect(component.registerStudentForm.invalid).toBeTruthy();
  }));

  // when all input data is present
  it("Form should be valid when all input data is provided",(()=>{
    update(validRegisterData.firstName,
          validRegisterData.lastName,
          validRegisterData.degreeId,
          validRegisterData.email,
          validRegisterData.password)
    expect(component.registerStudentForm.valid).toBeTruthy();
  }));

});
