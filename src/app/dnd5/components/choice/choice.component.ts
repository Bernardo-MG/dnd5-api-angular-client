import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Choice } from '@app/core/api/models/options/choice';

@Component({
  selector: 'dnd5-choice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choice.component.html'
})
export class ChoiceComponent {
  @Input() option: any;
  @Input() choice?: Choice;

  isChoice(): boolean {
    return !!(this.option?.choice ?? this.choice);
  }

  isOptionArray(): boolean {
    return this.option?.option_set_type === 'options_array';
  }

  isEquipment(): boolean {
    return this.option?.option_set_type === 'equipment_category';
  }

  isResourceList(): boolean {
    return this.option?.option_set_type === 'resource_list';
  }

  isReference(): boolean {
    return this.option?.option_type === 'reference';
  }

  isCounted(): boolean {
    return this.option?.option_type === 'counted_reference';
  }

  isMultiple(): boolean {
    return this.option?.option_type === 'multiple';
  }

  getChoice(): Choice {
    return this.option?.choice ?? this.choice!;
  }

  getOptions() {
    return this.option?.options ?? [];
  }

  getItems() {
    return this.option?.items ?? [];
  }

  getItemName() {
    return this.option?.item?.name ?? '';
  }

  getCount() {
    return this.option?.count ?? 0;
  }

  getOfName() {
    return this.option?.of?.name ?? '';
  }

  getEquipmentName() {
    return this.option?.equipment_category?.name ?? '';
  }

  getResourceList() {
    return this.option?.resource_list ?? '';
  }
}