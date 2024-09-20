import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './User';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aryan Angular' ;

  userList: User[] = [
    { id: 1, firstName: "Aryan", lastName: "Keyhani", department: "Programming", isAdmin: true },
    { id: 2, firstName: "Yuanhao", lastName: "Chan", department: "Programming", isAdmin: true },
    { id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false },
    { id: 4, firstName: "Jane", lastName: "Moe", department: "Programming", isAdmin: false },
    { id: 5, firstName: "Alice", lastName: "Smith", department: "Design", isAdmin: false },
    { id: 6, firstName: "Bob", lastName: "Johnson", department: "HR", isAdmin: false }
  ];
}
