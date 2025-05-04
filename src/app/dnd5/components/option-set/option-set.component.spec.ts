import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSetComponent } from './option-set.component';

describe('OptionSetComponent', () => {
  let component: OptionSetComponent;
  let fixture: ComponentFixture<OptionSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
