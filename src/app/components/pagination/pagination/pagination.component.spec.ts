import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '@app/components/button/button.component';
import { DataListComponent } from '@app/components/data-list/data-list.component';
import { BackwardIconComponent } from '@app/components/icons/backward-icon/backward-icon.component';
import { ForwardIconComponent } from '@app/components/icons/forward-icon/forward-icon.component';
import { ListItemComponent } from '@app/components/lists/list-item/list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationTemplateComponent } from '../pagination-template/pagination-template.component';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule
      ],
      declarations: [
        PaginationComponent,
        PaginationTemplateComponent,
        ButtonComponent,
        ListItemComponent,
        BackwardIconComponent,
        ForwardIconComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
