import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { validDegreeData, emptyDegreeData } from 'src/testData/degree';

import { AddDegreeComponent } from './add-degree.component';

describe('AddDegreeComponent', () => {
  let component: AddDegreeComponent;
  let fixture: ComponentFixture<AddDegreeComponent>;

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
        HttpClientTestingModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      declarations: [AddDegreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // function to update form values
  function update(degreeName, degreeId, degreeType, pace, duration) {
    component.addDegreeForm.controls['degreeName'].setValue(degreeName),
      component.addDegreeForm.controls['degreeId'].setValue(degreeId),
      component.addDegreeForm.controls['degreeType'].setValue(degreeType),
      component.addDegreeForm.controls['pace'].setValue(pace),
      component.addDegreeForm.controls['duration'].setValue(duration);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // empty input data
  it('Form should be invalid when input data is not provided', () => {
    update(
      emptyDegreeData.degreeName,
      emptyDegreeData.degreeId,
      emptyDegreeData.degreeType,
      emptyDegreeData.pace,
      emptyDegreeData.duration
    );

    expect(component.addDegreeForm.invalid).toBeTruthy();
  });

  // when all input data is present
  it('Form should be valid when all input data is provided', () => {
    update(
      validDegreeData.degreeName,
      validDegreeData.degreeId,
      validDegreeData.degreeType,
      validDegreeData.pace,
      validDegreeData.duration
    );

    expect(component.addDegreeForm.valid).toBeTruthy();
  });
});
