import { Component, OnInit } from '@angular/core';
import { AuthnService } from '../services/authn.service';
import { AuthenticationGuard } from '../authentication.guard';
import { Router } from '@angular/router';
import { DatapersistanceService } from '../services/datapersistance.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigationBar:boolean = false;
  constructor(private datapersistance:DatapersistanceService,private authnService: AuthnService, private authnGuard: AuthenticationGuard, private router: Router) { }

  ngOnInit() {
  }

  navigationBarForMobile(){
    this.navigationBar = !this.navigationBar;
  }

  logout(){
    this.authnGuard.allowNavigation = false;
    this.authnService.authorization = false;
    this.datapersistance.destroyData();
    this.router.navigateByUrl('logout');
  }
}
