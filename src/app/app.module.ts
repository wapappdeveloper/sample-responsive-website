import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';

import { AuthnService } from './services/authn.service';
import { CommonService } from './services/common.service';

import { AuthenticationGuard } from './authentication.guard';

import { routes } from './app.routing';
import { DatapersistanceService } from './services/datapersistance.service';
import { InfoComponent } from './info/info.component';
import { DeveloperComponent } from './developer/developer.component';
import { InteractService } from './services/interact.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    MainComponent,
    InfoComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthnService, AuthenticationGuard, CommonService, DatapersistanceService, InteractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
