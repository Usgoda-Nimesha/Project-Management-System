import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserLoginComponent } from './user-login.component';
import {validLoginData,emptyLoginData} from "src/mocks/login"

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

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
      declarations: [ UserLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // function to update form values
  function update(email,password){
    component.loginForm.controls["email"].setValue(email),
    component.loginForm.controls["password"].setValue(password)
  }

  // Checking whether the component is created properly
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Initial state of the component', () => {
    expect(component.submitStatus).toBeFalsy();
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('Check whether form values get updated', (() => {
    update(validLoginData.email, validLoginData.password);
    expect(component.loginForm.value).toEqual(validLoginData);
  }));

  // check whether both password and email are empty
  it('Form should be invalid when both email and password are empty', (() => {
    update(emptyLoginData.email, emptyLoginData.email);
    expect(component.loginForm.invalid).toBeTruthy();
  }));


  // check whether form is not valid when email is empty
  it("Error message should be displayed when email is empty",(()=>{
    update(emptyLoginData.email,validLoginData.password);
    fixture.detectChanges();

    const submitBtn = fixture.debugElement.nativeElement.querySelector("button");
    submitBtn.click();
    fixture.detectChanges();

    const emailErrorMsg= fixture.debugElement.nativeElement.querySelector('#email-error-msg');
    expect(emailErrorMsg).toBeTruthy();
  }));

  // check whether form is not valid when password is empty
  it("Error message should be displayed when password is empty",(()=>{
    update(validLoginData.email,emptyLoginData.password);
    fixture.detectChanges();

    const submitBtn = fixture.debugElement.nativeElement.querySelector("button");
    submitBtn.click();
    fixture.detectChanges();

    const pwErrorMsg= fixture.debugElement.nativeElement.querySelector('#pw-error-msg');
    expect(pwErrorMsg).toBeTruthy();
  }));

});
