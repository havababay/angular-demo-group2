import { Injectable } from '@angular/core';
import { Person } from '../shared/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private personIdToData = new Map<number, Person>();
  private nextId = 0;

  constructor() { }
   
  list(): Person[] {
    return Array.from(this.personIdToData.values());
  }

  add(newPersonData:Person) {
    newPersonData.id = this.nextId
    this.personIdToData.set(this.nextId, newPersonData);
    this.nextId++;
  }
 
  delete(id: number): void {
    this.personIdToData.delete(id);
  } 

  get(id: number): Person | undefined {
    return this.personIdToData.get(id);
  }
 
  update(existingPerson: Person): void {
    if (this.personIdToData.has(existingPerson.id)) {
      this.personIdToData.set(existingPerson.id, existingPerson);
    }
  }
 
}
