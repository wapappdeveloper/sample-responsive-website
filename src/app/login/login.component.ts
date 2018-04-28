import { Component, OnInit } from '@angular/core';
import { AuthnService } from '../services/authn.service';
import { AuthenticationGuard } from '../authentication.guard';
import { Router } from '@angular/router';
import { DatapersistanceService } from '../services/datapersistance.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credential: Credential = {
    username: '',
    password: ''
  }
  defaultCredential: Credential = {
    username: 'a',
    password: '1'
  }
  constructor(private datapersistance: DatapersistanceService, private authnService: AuthnService, private authnGuard: AuthenticationGuard, private router: Router) { }

  ngOnInit() {
    if (this.authnService.authorization) {
      this.router.navigateByUrl('main');
    } else {
      this.credential.username = '';
      this.credential.password = '';
      this.authnService.authorization = false;
      var data: any = this.datapersistance.getData();
      if (data) {
        this.credential = JSON.parse(data);
        this.submitCredential();
      }
    }

  }
  submitCredential() {
    if (this.credential.username === this.defaultCredential.username && this.credential.password === this.defaultCredential.password) {
      this.authnService.authorization = true;
      this.authnGuard.allowNavigation = true;
      this.datapersistance.setData(this.credential);
      this.router.navigateByUrl('main');
    } else {
      alert('username and password does not match');
      this.credential.password = ''
    }
  }

}

interface Credential {
  username: string,
  password: string
}
