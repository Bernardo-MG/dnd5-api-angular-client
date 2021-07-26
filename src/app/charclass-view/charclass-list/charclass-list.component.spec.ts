import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharclassListComponent } from './charclass-list.component';

describe('CharclassListComponent', () => {
  let component: CharclassListComponent;
  let fixture: ComponentFixture<CharclassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharclassListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharclassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
