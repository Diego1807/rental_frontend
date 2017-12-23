import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lend-item',
  templateUrl: './lend-item.component.html',
  styleUrls: ['./lend-item.component.css']
})
export class LendItemComponent implements OnInit {

  constructor(private itemsService: ItemsService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  lendItem(e) {
    e.preventDefault();
    var user = this.userService.getUserProperties();
    var username = user.username;
    var token = user.token;
    var name = e.target.elements[0].value;
    var price = e.target.elements[1].value;
    var description = e.target.elements[2].value;
    var body = {'name': name, 'price': price, 'description': description};
    this.itemsService.lendItem(username, token, body).subscribe((res) => {
      this.router.navigate(['dashboard']);
      alert(res.success);
    });
  }
}
