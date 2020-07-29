import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharclassDetailComponent } from './charclass-detail.component';

describe('CharclassDetailComponent', () => {
  let component: CharclassDetailComponent;
  let fixture: ComponentFixture<CharclassDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharclassDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharclassDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
