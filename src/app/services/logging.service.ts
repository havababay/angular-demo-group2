import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(message : string) {
    let now = new Date();
    console.log(now.toDateString() + ": " + message);
  }
}
