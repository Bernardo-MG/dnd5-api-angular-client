import { TestBed } from '@angular/core/testing';
import { CharclassService } from './charclass.service';

describe('CharclassService', () => {
  let service: CharclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
