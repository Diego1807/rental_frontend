import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lendedItems: JSON;
  constructor(private userService: UserService, private itemsService: ItemsService, private router: Router) {
  }

  ngOnInit() {
    var user = this.userService.getUserProperties();
    var username = user.username;
    var token = user.token;
    this.itemsService.getLendedItems(username, token).subscribe((res) => {
      this.lendedItems = res;
    });
  }
  returnItem(productID) {
    var user = this.userService.getUserProperties();
    var username = user.username;
    var token = user.token;
    this.itemsService.returnItem(username, productID, token).subscribe((res) => {
      this.ngOnInit();
    });
  }
  lendItem() {
    this.router.navigate(['lendItem']);
  }
}
