import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  constructor(
    private _service: LoginService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
  }
  login() {
    this._service.login({
      username: this.username,
      password: this.password
    }).subscribe((res) => {
      console.log(res)
      try {
        if(res['status']) {
          this.notifications.success("Successful",res['message']);
        }
        else throw res['message'];
      }
      catch (err) {
        this.notifications.error("Unsuccessful",err);
      }
    });
  }

}
