import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CharclassService } from './charclass.service';

describe('CharclassService', () => {
  let service: CharclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting() 
      ]
    });
    service = TestBed.inject(CharclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
