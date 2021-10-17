import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { userData } from '../FakeData/UserData';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

   users = new Array<User>();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // this.users = userData;
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}