import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsListViewComponent } from './spells-list-view.component';

describe('SpellsListViewComponent', () => {
  let component: SpellsListViewComponent;
  let fixture: ComponentFixture<SpellsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellsListViewComponent ]
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
