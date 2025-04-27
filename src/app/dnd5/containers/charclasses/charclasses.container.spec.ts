import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharclassesComponent } from './charclasses.container';

describe('CharclassesComponent', () => {
  let component: CharclassesComponent;
  let fixture: ComponentFixture<CharclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharclassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
