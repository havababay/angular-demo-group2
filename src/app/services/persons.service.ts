import { Injectable } from '@angular/core';
import { Person } from '../shared/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private readonly NEXT_ID_KEY = 'nextId';
  private readonly PERSONS_KEY = 'persons';

  private getNextId() : number {
    let nextIdData = localStorage.getItem(this.NEXT_ID_KEY);
/*
    if (nextIdData) {
      return parseInt(nextIdData);
    } else {
      return 0;
    }
*/
    return nextIdData ? parseInt(nextIdData) : 0;
  }

  private setNextId(id : number) {
    localStorage.setItem(this.NEXT_ID_KEY, id.toString());
  }

  private setPersons(allPersons : Map<number, Person>) {
    localStorage.setItem(this.PERSONS_KEY, JSON.stringify(Array.from(allPersons.values())))
  }

  private getPersons() : Map<number, Person> {
    let personsLocalData = localStorage.getItem(this.PERSONS_KEY);
    let idToPerson = new Map<number, Person>();

    if (personsLocalData) {
      JSON.parse(personsLocalData).forEach((person : Person) => {
        Object.setPrototypeOf(person, Person.prototype);
        idToPerson.set(person.id, person);
      });
    }

    return idToPerson;
  }

  constructor() { }
   
  list(): Person[] {
    return Array.from(this.getPersons().values());
  }

  get(id: number): Person {
    let personsData = this.getPersons();

    if (!personsData.has(id)) {
      throw new Error("Failed to get person with id " + id)
    }

    return personsData.get(id)!;
  }

  add(newPersonData:Person) {
    let nextId = this.getNextId();
    newPersonData.id = nextId;

    let personsData = this.getPersons();
    personsData.set(nextId, newPersonData);
    this.setPersons(personsData);

    this.setNextId(++nextId);
  }
 
  delete(id: number): void {
    let personsData = this.getPersons();

    if (!personsData.delete(id)) {
      throw new Error("Failed to delete person with id " + id)
    }

    this.setPersons(personsData);
  } 
 
  update(existingPerson: Person): void {
    let personsData = this.getPersons();

    if (!personsData.has(existingPerson.id)) { 
      throw new Error("Failed to update person with id " + existingPerson.id)
    }

    else {
      personsData.set(existingPerson.id, existingPerson);
      this.setPersons(personsData);
    }
  }
 
}
