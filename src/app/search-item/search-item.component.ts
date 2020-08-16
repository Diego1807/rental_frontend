import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  user;
  items;
  constructor(private userService: UserService, private itemsService:ItemsService, private router: Router) { }
  ngOnInit() {
  }
  searchItem(e) {
    e.preventDefault();
    this.user = this.userService.getUserProperties();
    var token = this.user.token
    var searchQuery = e.target.elements[0].value;
    this.itemsService.searchItem(token, searchQuery).subscribe((res: Response) => {
      this.items = res;
    });
  }
  borrowItem(productID) {
    this.user = this.userService.getUserProperties();
    this.itemsService.borrowItem(this.user.username, this.user.token, productID).subscribe((res: Response) => {
      alert(res);
      this.router.navigate(['dashboard']);
      //Put result in a variable and parse it on the borrow-item.html
    });
  }
}
