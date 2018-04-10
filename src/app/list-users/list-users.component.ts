import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [UserService]
})
export class ListUsersComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  @Output() clickSender = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  submitForm(name: string) {
    var newUser: User = new User(name);
    this.userService.addUser(newUser);
  }

  nameClicked(activeUser: User) {
    this.clickSender.emit(activeUser);
  }
}
