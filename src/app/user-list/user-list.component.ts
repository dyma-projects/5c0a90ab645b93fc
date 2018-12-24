import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users$: Observable<string[]>;

  constructor(
   private userService: UserService
  ) {
    this.users$ = this.userService.users;
  }

  ngOnInit() {


  }

}
