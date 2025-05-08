import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialEquipmentComponent } from './initial-equipment.component';

describe('InitialEquipmentComponent', () => {
  let component: InitialEquipmentComponent;
  let fixture: ComponentFixture<InitialEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialEquipmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
