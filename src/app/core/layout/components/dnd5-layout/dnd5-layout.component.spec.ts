import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dnd5LayoutComponent } from './dnd5-layout.component';

describe('MainLayoutComponent', () => {
  let component: Dnd5LayoutComponent;
  let fixture: ComponentFixture<Dnd5LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dnd5LayoutComponent ]
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
