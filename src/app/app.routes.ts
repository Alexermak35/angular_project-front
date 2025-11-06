import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about-component/about-component';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { Profile } from './profile/profile';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: Profile },



];
