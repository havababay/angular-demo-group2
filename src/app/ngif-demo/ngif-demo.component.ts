import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ngif-demo',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule
  ],
  templateUrl: './ngif-demo.component.html',
  styleUrl: './ngif-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgifDemoComponent { 
  counter = 0;

  increment() {
    ++this.counter;
  }
}
