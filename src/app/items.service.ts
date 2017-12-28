import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsService {

  constructor(private http: Http) { }
  getLendedItems(username, token) {
    var url = 'http://localhost:8080/User/' + username + '/items';
    var headers = new Headers();
    headers.append('token', token);
    var opts = new RequestOptions();
    opts.headers = headers;
    return this.http.get(url, opts).map((res: Response) => {
      return res.json()
    });
  }
  getBorrowedItems(username, token) {
    var url = 'http://localhost:8080/User/' + username + '/borrowedItems';
    var headers = new Headers();
    headers.append('token', token);
    var opts = new RequestOptions();
    opts.headers = headers;
    return this.http.get(url, opts).map((res: Response) => {
      return res.json()
    });
  }
  returnItem(username, productID, token) {
    var url = 'http://localhost:8080/User/' + username + '/returnItem/' + productID;
    var headers = new Headers();
    headers.append('token', token);
    var opts = new RequestOptions();
    opts.headers = headers;
    return this.http.get(url, opts).map((res: Response) => {
      if(res.status == 200) {
        alert('Item returned successfully')
      } else {
        alert('Unable to delete item');
      }
      return res;
    });
  }
  lendItem(username, token, body) {
    var url = 'http://localhost:8080/User/' + username + '/lends';
    var headers = new Headers();
    headers.append('token', token);
    var opts = new RequestOptions();
    opts.headers = headers;
    return this.http.post(url, body, opts).map((res: Response) => {
      return res.json();
    });
  }
  borrowItem(username, token, productID) {
    var url = 'http://localhost:8080/User/' + username + '/borrows/' + productID;
    var headers = new Headers();
    headers.append('token', token);
    var opts = new RequestOptions();
    opts.headers = headers;
    return this.http.get(url, opts).map((res: Response) => {
      return res.json();
    });
  }
  searchItem(token, name) {
    var url = 'http://localhost:8080/Item/search';
    var body = {name: name};
    var headers = new Headers();
    headers.append('token', token);
    var opts = new RequestOptions();
    opts.headers = headers;
    return this.http.post(url, body, opts).map((res: Response) => {
      return res.json();
    });
  }
}
