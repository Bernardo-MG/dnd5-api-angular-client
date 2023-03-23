import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '@app/components/button/button.component';
import { BackwardIconComponent } from '@app/components/icons/backward-icon/backward-icon.component';
import { ForwardIconComponent } from '@app/components/icons/forward-icon/forward-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationTemplateComponent } from './pagination-template.component';

describe('PaginationTemplateComponent', () => {
  let component: PaginationTemplateComponent;
  let fixture: ComponentFixture<PaginationTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule
      ],
      declarations: [
        PaginationTemplateComponent,
        ButtonComponent,
        BackwardIconComponent,
        ForwardIconComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PaginationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // List structure

  it('by default only the backward and forward list items exist', () => {
    const items = fixture.nativeElement.querySelectorAll('li');
    expect(items.length).toEqual(2);
  });

  it('should add a list item when receiving a page for the first half', () => {
    component.left = [1];
    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('li');
    expect(items.length).toEqual(3);
  });

  it('should add list items, including separator, when receiving a page for the second half and there is a first half', () => {
    component.left = [1];
    component.right = [5];
    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('li');
    expect(items.length).toEqual(5);
  });

  it('should add no list items when receiving a page for the second half when there is no first half', () => {
    component.right = [5];
    fixture.detectChanges();

    const items = fixture.nativeElement.querySelectorAll('li');
    expect(items.length).toEqual(2);
  });

  // Movement buttons

  it('by default only the backward and forward buttons exist', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toEqual(2);
  });

  // Page buttons

  it('should add a button when receiving a page for the first half', () => {
    component.left = [1];
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button');
    expect(button.length).toEqual(3);
  });

  it('should add multiple buttons when receiving multiple pages for the first half', () => {
    component.left = [1, 2, 3];
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button');
    expect(button.length).toEqual(5);
  });

  it('should add no button when receiving a page for the second half when there is no first half', () => {
    component.right = [5];
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button');
    expect(button.length).toEqual(2);
  });

  it('should add a button when receiving a page for the second half and there is a first half', () => {
    component.left = [1];
    component.right = [5];
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button');
    expect(button.length).toEqual(4);
  });

  it('should add multiple buttons when receiving multiple pages for both halves', () => {
    component.left = [1, 2, 3];
    component.right = [5, 6, 7];
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button');
    expect(button.length).toEqual(8);
  });

  // List structure

  // Disable based on status flags

  it('should disable the backward button by default', () => {
    const button = fixture.nativeElement.querySelectorAll('button')[0];
    expect(button.disabled).toEqual(true);
  });

  it('should disable the forward button by default', () => {
    const button = fixture.nativeElement.querySelectorAll('button')[1];
    expect(button.disabled).toEqual(true);
  });

  it('should disable the backward button when it is the first page', () => {
    component.first = true;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button')[0];
    expect(button.disabled).toEqual(true);
  });

  it('should enable the backward button when it is not the first page', () => {
    component.first = false;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button')[0];
    expect(button.disabled).toEqual(false);
  });

  it('should disable the forward button when it is the last page', () => {
    component.last = true;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button')[1];
    expect(button.disabled).toEqual(true);
  });

  it('should enable the forward button when it is not the last page', () => {
    component.last = false;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button')[1];
    expect(button.disabled).toEqual(false);
  });

  // Disable status

  it('should disable the backward button when the component is disabled', () => {
    component.first = false;
    component.last = false;
    component.disabled = true;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button')[0];
    expect(button.disabled).toEqual(true);
  });

  it('should enable the backward button when the component is enabled', () => {
    component.first = false;
    component.last = false;
    component.disabled = false;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button')[0];
    expect(button.disabled).toEqual(false);
  });

  it('should disable the forward button when the component is disabled', () => {
    component.first = false;
    component.last = false;
    component.disabled = true;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button')[1];
    expect(button.disabled).toEqual(true);
  });

  it('should enable the forward button when the component is enabled', () => {
    component.first = false;
    component.last = false;
    component.disabled = false;
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('button')[1];
    expect(button.disabled).toEqual(false);
  });

  it('should disable the page buttons when the component is disabled', () => {
    component.first = false;
    component.last = false;
    component.disabled = true;
    component.left = [1];
    component.right = [5];
    fixture.detectChanges();

    // Page button for the first half
    let button = fixture.nativeElement.querySelectorAll('button')[1];
    expect(button.disabled).toEqual(true);

    // Page button for the second half
    button = fixture.nativeElement.querySelectorAll('button')[2];
    expect(button.disabled).toEqual(true);
  });

});
