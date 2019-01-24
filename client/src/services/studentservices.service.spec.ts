import { TestBed } from '@angular/core/testing';

import { StudentservicesService } from './studentservices.service';

describe('StudentservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentservicesService = TestBed.get(StudentservicesService);
    expect(service).toBeTruthy();
  });
});
