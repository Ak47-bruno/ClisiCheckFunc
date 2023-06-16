import { TestBed } from '@angular/core/testing';

import { ListlogsService } from './listlogs.service';

describe('ListlogsService', () => {
  let service: ListlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
