import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsDetailViewComponent } from './spells-detail-view.component';

describe('SpellsDetailViewComponent', () => {
  let component: SpellsDetailViewComponent;
  let fixture: ComponentFixture<SpellsDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellsDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
