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
  user;
  borrowedItems: JSON;
  constructor(private userService: UserService, private itemsService: ItemsService, private router: Router) {
  }
  getUser() {
    this.user = this.userService.getUserProperties();
  }
  ngOnInit() {
    this.getUser();
    this.itemsService.getLendedItems(this.user.username, this.user.token).subscribe((res) => {
      this.lendedItems = res;
    });
    this.itemsService.getBorrowedItems(this.user.username, this.user.token).subscribe((res) => {
      this.borrowedItems = res;
    })
  }
  returnItem(productID) {
    this.getUser();
    this.itemsService.returnItem(this.user.username, productID, this.user.token).subscribe((res) => {
      this.ngOnInit();
    });
  }
  lendItem() {
    this.router.navigate(['lendItem']);
  }
  searchItem() {
    this.router.navigate(['searchItem']);
  }
}
