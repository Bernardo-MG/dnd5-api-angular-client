import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared/shared.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideMenuLayoutComponent } from './side-menu-layout.component';

describe('HeaderLayoutComponent', () => {
  let component: SideMenuLayoutComponent;
  let fixture: ComponentFixture<SideMenuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        SideMenuLayoutComponent,
        NavbarComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SideMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
