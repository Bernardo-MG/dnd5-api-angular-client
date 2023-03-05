import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharclassViewComponent } from './charclass-view.component';
import { CharclassModule } from '@app/charclass/charclass.module';
import { CharclassService } from '@app/charclass/services/charclass.service';
import { of } from 'rxjs';
import { Charclass } from '@app/dnd5/models/charclass';
import { RouterTestingModule } from '@angular/router/testing';

describe('CharclassViewComponent', () => {
  let component: CharclassViewComponent;
  let fixture: ComponentFixture<CharclassViewComponent>;
  let serviceSpy: { getCharClasses: jasmine.Spy };

  beforeEach(async () => {
    const expectedData: Charclass[] =
      [{ index: '1', name: 'A', hit_die: 1, proficiency_choices: [], proficiencies: [], saving_throws: [], starting_equipment: '', class_levels: '', subclasses: [], url: '' }];

    serviceSpy = jasmine.createSpyObj('CharclassService', ['getCharClasses']);
    serviceSpy.getCharClasses.and.returnValue(of(expectedData));

    await TestBed.configureTestingModule({
      declarations: [CharclassViewComponent],
      imports: [
        CharclassModule,
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
    expect(serviceSpy.getCharClasses).toHaveBeenCalledTimes(1);
  });
});
