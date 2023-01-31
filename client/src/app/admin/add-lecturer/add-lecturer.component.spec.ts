import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AddLecturerComponent } from './add-lecturer.component';
import { validRegisterData,emptyRegisterData } from 'src/testData/lecturer-register';

describe('AddLecturerComponent', () => {
  let component: AddLecturerComponent;
  let fixture: ComponentFixture<AddLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientTestingModule
    ],
    providers: [
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} }
    ],
      declarations: [ AddLecturerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   // function to update form values
   function update(firstName,lastName,email,password){
    component.addLecturerForm.controls["firstName"].setValue(firstName),
    component.addLecturerForm.controls["lastName"].setValue(lastName),
    component.addLecturerForm.controls["email"].setValue(email),
    component.addLecturerForm.controls["password"].setValue(password)
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // empty input data
  it('Form should be invalid when input data is not provided', (() => {
    update(emptyRegisterData.firstName,
      emptyRegisterData.lastName,
      emptyRegisterData.email,
      emptyRegisterData.password);

    expect(component.addLecturerForm.invalid).toBeTruthy();
  }));

  // when all input data is present
  it("Form should be valid when all input data is provided",(()=>{
    update(validRegisterData.firstName,
          validRegisterData.lastName,
          validRegisterData.email,
          validRegisterData.password)

    expect(component.addLecturerForm.valid).toBeTruthy();
  }));
});
