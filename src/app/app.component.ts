import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthnService } from './services/authn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  authorised:boolean = false;
  constructor(private router:Router, private authnService:AuthnService){

  }
  ngOnInit(){
    if (this.authnService.authorization) {
      this.router.navigateByUrl('main');
    } else {
      this.router.navigateByUrl('login');
    }
  }
}
