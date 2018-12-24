import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users : Array<string>;

  users : BehaviorSubject<string[]>;

  constructor() {
    this._users = [];

    this.users = new BehaviorSubject<string[]>(this._users);
  }

  public addUser(username:string): void {

    this._users = [...this._users, username];
    this.users.next(this._users);

  }
}
