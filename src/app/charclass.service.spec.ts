import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { CharclassService } from './charclass.service';

describe('CharclassService', () => {
  let service: CharclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CharclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
