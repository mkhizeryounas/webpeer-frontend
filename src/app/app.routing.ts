import { RouterModule  }     from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routing = RouterModule.forRoot([
	{ 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'not-found', 
        component: NotFoundComponent 
    },
    { 
        path: '**', 
        redirectTo: 'not-found'
     }
]);