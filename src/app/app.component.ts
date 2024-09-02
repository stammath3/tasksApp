import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent
    // , NgFor, NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedUserId?:string;

  users = DUMMY_USERS;

  get selectedUser() {
    return DUMMY_USERS.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
  //  const user = DUMMY_USERS.find(user => user.id === id);
  //   this.userName = user!.name;
  this.selectedUserId = id;
    console.log('Selected user with id: ' + id);

  }
}
