import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerChatComponent } from './lecturer-chat.component';

describe('LecturerChatComponent', () => {
  let component: LecturerChatComponent;
  let fixture: ComponentFixture<LecturerChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
