import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '@app/components/components.module';
import { CharclassModule } from '@app/dnd5/charclass/charclass.module';
import { CharclassService } from '@app/dnd5/charclass/services/charclass.service';
import { CharclassDetailViewComponent } from './charclass-detail-view.component';

describe('CharclassDetailViewComponent', () => {
  let component: CharclassDetailViewComponent;
  let fixture: ComponentFixture<CharclassDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ComponentsModule,
        CharclassModule
      ],
      declarations: [
        CharclassDetailViewComponent
      ],
      providers: [
        CharclassService
      ]
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
