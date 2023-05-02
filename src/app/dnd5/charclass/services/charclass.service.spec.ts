import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';

import { CharclassService } from './charclass.service';
import { of } from 'rxjs';
import { Charclass } from '@app/dnd5/models/charclass/charclass';
import { CharclassModule } from '../charclass.module';

describe('CharclassService', () => {
  let service: CharclassService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports:[
        CharclassModule
      ],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(CharclassService);
  });

  it('returns value from request', () => {
    const expectedData: Charclass[] = [new Charclass()];

    httpClientSpy.get.and.returnValue(of(expectedData));

    service.getCharacterClasses();

    expect(httpClientSpy.get).toHaveBeenCalled();
  });

});
