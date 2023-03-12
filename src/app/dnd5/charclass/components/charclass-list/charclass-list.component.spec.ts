import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Reference } from '@app/dnd5/models/info/reference';

import { CharclassListComponent } from './charclass-list.component';

describe('CharclassListComponent', () => {
  let component: CharclassListComponent;
  let fixture: ComponentFixture<CharclassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharclassListComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharclassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('by default has no items', () => {
    const count = fixture.debugElement.queryAll(By.css('.list-group-item')).length;

    expect(count).toBe(0);
  });

  it('loads items when receiving input', () => {
    const comp = fixture.componentInstance;
    comp.charclasses = [new Reference()];
    fixture.detectChanges();
    
    const count = fixture.debugElement.queryAll(By.css('.list-group-item')).length;

    expect(count).toBe(1);
  });

});
