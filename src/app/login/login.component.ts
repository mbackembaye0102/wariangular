import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }
loginUser(data){
  console.log(data);

  this.auth.login(data)
  .subscribe(
    res => {
      console.log(res);
    },
    err => {}
  ) }


}
