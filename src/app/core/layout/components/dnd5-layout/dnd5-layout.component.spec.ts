import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@app/shared/shared.module';
import { Dnd5LayoutComponent } from './dnd5-layout.component';

describe('Dnd5LayoutComponent', () => {
  let component: Dnd5LayoutComponent;
  let fixture: ComponentFixture<Dnd5LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        Dnd5LayoutComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Dnd5LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
