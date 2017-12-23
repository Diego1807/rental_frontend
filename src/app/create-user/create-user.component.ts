import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  createUser(e) {
    e.preventDefault();
    var firstName = e.target.elements[0].value;
    var lastName = e.target.elements[1].value;
    var username = e.target.elements[2].value;
    var password = e.target.elements[3].value;
    var phoneNo = e.target.elements[4].value;
    var email = e.target.elements[5].value;
    var address = e.target.elements[6].value;
    var body = {firstName: firstName, lastName: lastName, username: username, password: password, phoneNo: phoneNo, email: email, address: address};
    this.userService.create(body).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}
