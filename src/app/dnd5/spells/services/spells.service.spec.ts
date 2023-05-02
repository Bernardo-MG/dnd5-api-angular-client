import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SpellsModule } from '../spells.module';
import { SpellsService } from './spells.service';

describe('SpellsService', () => {
  let service: SpellsService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports:[
        SpellsModule
      ],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(SpellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
