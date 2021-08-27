import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';

import { CharclassService } from './charclass.service';
import { of } from 'rxjs';
import { Charclass } from '@app/charclass/models/charclass';
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
    const expectedData: Charclass[] =
      [{ index: '1', name: 'A', hit_die: 1, proficiency_choices: [], proficiencies: [], saving_throws: [], starting_equipment: '', class_levels: '', subclasses: [], url: '' }];

    httpClientSpy.get.and.returnValue(of(expectedData));

    service.getCharClasses();

    expect(httpClientSpy.get).toHaveBeenCalled();
  });

});
