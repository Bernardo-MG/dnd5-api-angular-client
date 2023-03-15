import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharclassDetailViewComponent } from './charclass-detail-view.component';

describe('CharclassDetailViewComponent', () => {
  let component: CharclassDetailViewComponent;
  let fixture: ComponentFixture<CharclassDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharclassDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharclassDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
