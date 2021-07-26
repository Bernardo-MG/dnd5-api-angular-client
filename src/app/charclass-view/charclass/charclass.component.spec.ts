import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutingModule } from '@app/app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharclassComponent } from './charclass.component';

describe('CharclassComponent', () => {
  let component: CharclassComponent;
  let fixture: ComponentFixture<CharclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientTestingModule],
      declarations: [ CharclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
