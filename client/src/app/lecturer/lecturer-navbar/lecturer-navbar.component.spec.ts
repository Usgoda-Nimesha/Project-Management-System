import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerNavbarComponent } from './lecturer-navbar.component';

describe('LecturerNavbarComponent', () => {
  let component: LecturerNavbarComponent;
  let fixture: ComponentFixture<LecturerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
