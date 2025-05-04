import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharclassInfoComponent } from './charclass-info.component';

describe('CharclassInfoComponent', () => {
  let component: CharclassInfoComponent;
  let fixture: ComponentFixture<CharclassInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharclassInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharclassInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
