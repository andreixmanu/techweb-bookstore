import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuctionComponent } from './auction/auction.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        title: 'Home Page'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Form'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register Form'
    },
    {
        path: 'auction/:id',
        component: AuctionComponent,
        title: 'Auction Page'
    }
];
