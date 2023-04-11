import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@app/shared/shared.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidenavLayoutComponent } from './side-menu-layout.component';

describe('SidenavLayoutComponent', () => {
  let component: SidenavLayoutComponent;
  let fixture: ComponentFixture<SidenavLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        SidenavLayoutComponent,
        NavbarComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SidenavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
