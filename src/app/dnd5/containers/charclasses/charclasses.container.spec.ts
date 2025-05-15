import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CharclassesComponent } from './charclasses.container';

describe('CharclassesComponent', () => {
  let component: CharclassesComponent;
  let fixture: ComponentFixture<CharclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        provideRouter([])
      ],
      imports: [
        CharclassesComponent
      ]
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
