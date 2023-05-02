import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared/shared.module';
import { SpellsService } from '../../services/spells.service';
import { SpellsListViewComponent } from './spells-list-view.component';

describe('SpellsListViewComponent', () => {
  let component: SpellsListViewComponent;
  let fixture: ComponentFixture<SpellsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule
      ],
      declarations: [
         SpellsListViewComponent
      ],
      providers: [
        SpellsService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
