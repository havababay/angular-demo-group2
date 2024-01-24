import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FruitType } from '../shared/model/fruit-type';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgswitchDemoComponent } from '../ngswitch-demo/ngswitch-demo.component';

@Component({
  selector: 'app-ngfor-demo',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatIconModule, NgswitchDemoComponent
  ],
  templateUrl: './ngfor-demo.component.html',
  styleUrl: './ngfor-demo.component.css',
})
export class NgforDemoComponent { 
  fruitsArr = [FruitType.Apple, 
    FruitType.Apple, 
    FruitType.Orange,
    FruitType.Banana];

  fruitOptions = Object.values(FruitType);

  deleteFruit(index : number) : void {
    this.fruitsArr.splice(index, 1);
    this.fruitsArr = Array.from(this.fruitsArr);
  }

  addFruit(fruit : FruitType) : void {
    this.fruitsArr = [... this.fruitsArr, fruit];
  }
}
