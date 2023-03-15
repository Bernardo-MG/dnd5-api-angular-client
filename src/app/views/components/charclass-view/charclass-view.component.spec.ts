import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Charclass } from '@app/dnd5/models/charclass/charclass';
import { of } from 'rxjs';
import { CharclassService } from '../../../dnd5/charclass/services/charclass.service';
import { CharclassViewComponent } from './charclass-view.component';

describe('CharclassViewComponent', () => {
  let component: CharclassViewComponent;
  let fixture: ComponentFixture<CharclassViewComponent>;
  let serviceSpy: { getCharacterClasses: jasmine.Spy };

  beforeEach(async () => {
    const expectedData: Charclass[] = [new Charclass()];

    serviceSpy = jasmine.createSpyObj('CharclassService', ['getCharacterClasses']);
    serviceSpy.getCharacterClasses.and.returnValue(of(expectedData));

    await TestBed.configureTestingModule({
      declarations: [
        CharclassViewComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: CharclassService, useValue: serviceSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharclassViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('loads data on start', () => {
    expect(serviceSpy.getCharacterClasses).toHaveBeenCalledTimes(1);
  });
});
