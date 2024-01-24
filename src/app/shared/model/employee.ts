import { Person } from "./person";

export class Employee implements Person {
    firstName: string;
    lastName: string;
    email: string;
    age?: number | undefined;
    salary : number;
    
    fullName(): string {
        throw new Error("Method not implemented.");
    }

}