import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSetNodeComponent } from './option-set-node.component';

describe('OptionSetNodeComponent', () => {
  let component: OptionSetNodeComponent;
  let fixture: ComponentFixture<OptionSetNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionSetNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionSetNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
