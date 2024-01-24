import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../shared/model/person';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-forms-demo',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsDemoComponent implements OnInit {
  @Input()
  id? : number;

  currentPerson! : Person;

  persons : Person[] = [
    new Person(1, "Alice", "Smith", "alice@example.com"),
    new Person(2, "Bob","Jones","bob@example.com",15),
    new Person(3, "Charlie","Brown","charlie@example.com")
  ];

constructor(private logService : LoggingService) {

}

ngOnInit(): void {
  if (this.id && this.id >=0 && this.id < this.persons.length) {
    this.logService.log("Edit perosn");
    this.currentPerson = this.persons[this.id];
  } else {
    this.logService.log("New perosn");
    this.currentPerson = new Person(0, "", "", "");
  }
} 

  onFormSubmission() {
    this.logService.log("Form submitted!!");
  }
}
