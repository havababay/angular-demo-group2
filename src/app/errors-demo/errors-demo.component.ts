import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Person } from '../shared/model/person';
import { PersonsService } from '../services/persons.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-errors-demo',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule
  ],
  templateUrl: './errors-demo.component.html',
  styleUrl: './errors-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorsDemoComponent { 
  personIndex? : number;
  currentPerson?: Person;

  constructor(private personService : PersonsService){}

  getPersonDataByIndex() {
    this.currentPerson =
      this.personService.get(this.personIndex!);
  }
}
