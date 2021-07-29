import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { RouterTestingModule } from '@angular/router/testing';

import { CharclassListComponent } from './charclass-list.component';

describe('CharclassListComponent', () => {
  let component: CharclassListComponent;
  let fixture: ComponentFixture<CharclassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharclassListComponent],
      imports: [
        RouterTestingModule,
        MatListModule
      ]
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
