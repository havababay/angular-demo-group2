import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FruitType } from '../shared/model/fruit-type';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-router-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './router-demo.component.html',
  styleUrl: './router-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouterDemoComponent {
  fruitsDataBase = [FruitType.Apple, FruitType.Apple, FruitType.Orange, FruitType.Strawberry]; 
  currentFruit = FruitType.Apple;

  constructor(private logService : LoggingService){}

  @Input()
  set id(fruitIndex : number) {
    this.currentFruit = this.fruitsDataBase[fruitIndex];
    this.logService.log("after id input method");
  }
}
