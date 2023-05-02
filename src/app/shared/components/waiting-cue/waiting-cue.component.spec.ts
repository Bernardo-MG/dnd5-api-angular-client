import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingCueComponent } from './waiting-cue.component';

describe('WaitingCueComponent', () => {
  let component: WaitingCueComponent;
  let fixture: ComponentFixture<WaitingCueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingCueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingCueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
