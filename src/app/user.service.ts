import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  isLoggedIn: boolean;
  userProperties: JSON;
  constructor(private http: Http) { 
  }
  login(username, password) {
    var url = 'http://localhost:8080/User/login';
    var body = {username: username, password: password};
    return this.http.post(url, body).map((res: Response) => {
      if(res.status == 200) {
        this.setIsLoggedIn(true);
      } else {
        this.setIsLoggedIn(false);
      }
      var json = res.json();
      this.setUserProperties(json.User);
      return json;
    });
  }
  create(body) {
    var url = 'http://localhost:8080/User';
    return this.http.post(url, body).map((res: Response) => {
      return res.json;
    });
  }
  setUserProperties(json) {
    this.userProperties = json;
  }
  getUserProperties() {
    return this.userProperties;
  }
  getIsLoggedIn() {
    return this.isLoggedIn;
  }
  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
