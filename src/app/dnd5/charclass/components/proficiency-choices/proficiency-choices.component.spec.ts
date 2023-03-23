import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencyChoicesComponent } from './proficiency-choices.component';

describe('ProficiencyChoicesComponent', () => {
  let component: ProficiencyChoicesComponent;
  let fixture: ComponentFixture<ProficiencyChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProficiencyChoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProficiencyChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
