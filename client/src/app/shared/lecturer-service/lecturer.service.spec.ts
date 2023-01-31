import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LecturerService } from './lecturer.service';

describe('LecturerService', () => {
  let service: LecturerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(LecturerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
