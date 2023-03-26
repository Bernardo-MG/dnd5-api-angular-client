import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptionSetComponent } from '../option-set/option-set.component';
import { ChoiceComponent } from './choice.component';

describe('ChoiceComponent', () => {
  let component: ChoiceComponent;
  let fixture: ComponentFixture<ChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ChoiceComponent,
        OptionSetComponent
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
