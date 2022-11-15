import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userRoleChanging = new BehaviorSubject<string>("hr");
  $userRoleChanging = this.userRoleChanging.asObservable();

  constructor() { }

  changeRole(message: string) {
    this.userRoleChanging.next(message);
  }

}
