import { TestBed } from '@angular/core/testing';

import { PostservicesService } from './postservices.service';

describe('PostservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostservicesService = TestBed.get(PostservicesService);
    expect(service).toBeTruthy();
  });
});
