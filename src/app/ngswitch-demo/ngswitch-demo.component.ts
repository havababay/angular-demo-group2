import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FruitType } from '../shared/model/fruit-type';

@Component({
  selector: 'app-ngswitch-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ngswitch-demo.component.html',
  styleUrl: './ngswitch-demo.component.css',
})
export class NgswitchDemoComponent { 
  fruitsMap = new Map<FruitType, number>();
  fruitKeys : FruitType[] = [];

  @Input()
  set fruits(arr : FruitType[]) {
    this.fruitsMap.clear();
    arr.forEach(fruitValue => this.addOrUpdateMap(fruitValue));
    this.fruitKeys = [ ...this.fruitsMap.keys()]
  }

  FruitType = FruitType;

  addOrUpdateMap(fruitValue: FruitType): void {
    if (!this.fruitsMap.has(fruitValue)) {
      this.fruitsMap.set(fruitValue, 1);
    } else {
      let amount = this.fruitsMap.get(fruitValue);
      this.fruitsMap.set(fruitValue, amount! + 1);
    }
  }
}



