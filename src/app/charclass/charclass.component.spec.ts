import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharclassComponent } from './charclass.component';

describe('CharclassComponent', () => {
  let component: CharclassComponent;
  let fixture: ComponentFixture<CharclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
