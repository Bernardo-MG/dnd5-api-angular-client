import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharclassListViewComponent } from './charclass-list-view.component';

describe('CharclassListViewComponent', () => {
  let component: CharclassListViewComponent;
  let fixture: ComponentFixture<CharclassListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharclassListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharclassListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
