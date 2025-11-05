import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about-component/about-component';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },



];
