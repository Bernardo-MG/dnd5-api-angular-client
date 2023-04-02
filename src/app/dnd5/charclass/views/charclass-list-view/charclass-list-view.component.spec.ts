import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CharclassModule } from '@app/dnd5/charclass/charclass.module';
import { CharclassService } from '@app/dnd5/charclass/services/charclass.service';
import { SharedModule } from '@app/shared/shared.module';
import { CharclassListViewComponent } from './charclass-list-view.component';

describe('CharclassListViewComponent', () => {
  let component: CharclassListViewComponent;
  let fixture: ComponentFixture<CharclassListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        CharclassModule
      ],
      declarations: [
        CharclassListViewComponent
      ],
      providers: [
        CharclassService
      ]
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
