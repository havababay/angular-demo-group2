import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../shared/model/person';
import { PersonsService } from '../services/persons.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PhoneNumber } from '../shared/model/phone-number';
import { PhoneType } from '../shared/model/phone-type';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormComponent implements OnInit { 
  @Input() idString?:string;
  currentPerson: Person = new Person(0,'','','')
  @ViewChild('phonesGroup') phonesGroup? : NgModelGroup;

  phoneTypeOptions = Object.values(PhoneType);

  constructor(private personsService : PersonsService, private router : Router){}
  
  ngOnInit(): void {
    if (this.idString) {
      let existingData = this.personsService.get(parseInt(this.idString));

      if (existingData) {
        this.currentPerson = existingData;
      }
    }
  }

  onSubmitRegistration() {
    if (this.idString) {
      this.personsService.update(this.currentPerson);
    } else {
      this.personsService.add(this.currentPerson);
    }
    
    this.router.navigate(['/persons']);
  }

  addPhoneNumber() {
    this.currentPerson.phones.push(new PhoneNumber("", PhoneType.Mobile));
  }

  removePhoneNumber(index : number) {
    console.log("index: " + index);
    this.currentPerson.phones.splice(index, 1);
    this.phonesGroup?.control.markAsDirty();
  }
}
