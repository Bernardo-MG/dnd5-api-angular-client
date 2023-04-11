import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GithubIconComponent } from './github-icon.component';

describe('GithubIconComponent', () => {
  let component: GithubIconComponent;
  let fixture: ComponentFixture<GithubIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule
      ],
      declarations: [
        GithubIconComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GithubIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
