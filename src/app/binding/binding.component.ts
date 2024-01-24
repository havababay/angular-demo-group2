import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  productName = "iPhone 15 pro mini"
  price = 5000
  quantity = 5
  isButtonDisabled = true

  constructor(private logService : LoggingService) {

  }

  getDateAsString() : string {
    const today = new Date();
    return today.toDateString();
  }

  increaseQuantity() : void {
    ++this.quantity;
    this.logService.log("Button clicked " + this.quantity)
  }

  changeDisabled () : void {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}
