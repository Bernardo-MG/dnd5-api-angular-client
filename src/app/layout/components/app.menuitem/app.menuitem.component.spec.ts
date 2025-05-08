import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitemComponent } from './app.menuitem.component';

describe('AppMenuitemComponent', () => {
  let component: AppMenuitemComponent;
  let fixture: ComponentFixture<AppMenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([])
      ],
      imports: [
        AppMenuitemComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppMenuitemComponent);
    component = fixture.componentInstance;

    component.item = {
      label: 'Test',
      routerLink: ['/test']
    } as MenuItem;
    component.index = 0;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
