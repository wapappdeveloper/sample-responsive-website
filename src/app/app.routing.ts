import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthenticationGuard } from "./authentication.guard";
import { InfoComponent } from "./info/info.component";

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch:'full'},
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent, canActivate: [AuthenticationGuard] },
    { path: 'info', component: InfoComponent, canActivate: [AuthenticationGuard] },
    { path: 'logout', component: LogoutComponent }
];