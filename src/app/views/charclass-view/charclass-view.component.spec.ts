import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharclassViewComponent } from './charclass-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CharclassModule } from '@app/charclass/charclass.module';

describe('CharclassViewComponent', () => {
  let component: CharclassViewComponent;
  let fixture: ComponentFixture<CharclassViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharclassViewComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        CharclassModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharclassViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
