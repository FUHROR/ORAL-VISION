// import { Routes } from '@angular/router';
// import { LoginComponent } from './core/auth/login/login.component';
// import { RegisterComponent } from './core/auth/register/register.component';
// import { AboutComponent } from './core/features/about/about.component';
// import { AwarenessComponent } from './core/features/awareness/awareness.component';
// import { ChatbotComponent } from './core/features/chatbot/chatbot.component';
// import { DiagnosisComponent } from './core/features/diagnosis/diagnosis.component';
// import { HomeComponent } from './core/features/home/home.component';
// import { NotfoundComponent } from './core/features/notfound/notfound.component';
// import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
// import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
// import { authGuard } from './core/guards/auth-guard';
// import { isLggedGuard } from './core/guards/is-lgged-guard';

// export const routes: Routes = [
//     {path:'' , redirectTo:'home' , pathMatch:'full'},
//     {path:'' , component: AuthLayoutComponent ,canActivate:[isLggedGuard]
//         ,children:[
//         {path:'login' , component:LoginComponent , title:"login page"},
//         {path:'register' , component:RegisterComponent , title:"register page"}
//     ]},
//     {path:'' , component: BlankLayoutComponent , canActivate:[authGuard]
//         , children:[
//         {path:'home' , component:HomeComponent , title:"home page" ,},
//         {path:'diagnosis' , component:DiagnosisComponent , title:"diagnosis page" ,},
//         {path:'awareness' , component:AwarenessComponent , title:"awareness page" , },
//         {path:'chatbot' , component:ChatbotComponent , title:"chatbot page" , },
//         {path:'about' , component:AboutComponent , title:"about page" , },
//     ]},

//     {path:'**' , component:NotfoundComponent , title:"404 not found page"}
// ];
 

import { Routes } from '@angular/router';

import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';

import { AboutComponent } from './core/features/about/about.component';
import { AwarenessComponent } from './core/features/awareness/awareness.component';
import { ChatbotComponent } from './core/features/chatbot/chatbot.component';
import { DiagnosisComponent } from './core/features/diagnosis/diagnosis.component';
import { HomeComponent } from './core/features/home/home.component';
import { NotfoundComponent } from './core/features/notfound/notfound.component';

import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';

import { authGuard } from './core/guards/auth-guard';
import { isLggedGuard } from './core/guards/is-lgged-guard';

export const routes: Routes = [

  // Default Redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // ================= AUTH LAYOUT =================
  {
    path: '',
    component: AuthLayoutComponent,
     canActivate: [isLggedGuard],
    children: [
      { path: 'login', component: LoginComponent, title: 'login page' },
      { path: 'register', component: RegisterComponent, title: 'register page' }
    ]
  },

  // ================= MAIN LAYOUT =================
  {
    path: '',
    component: BlankLayoutComponent,
     canActivate: [authGuard],
    children: [

      { path: 'home', component: HomeComponent, title: 'home page' },

      // Diagnosis Page
      { path: 'diagnosis', component: DiagnosisComponent, title: 'diagnosis page' },

      // Diagnosis History Page (Standalone Lazy Loaded)
      {
        path: 'diagnosis/history',
        loadComponent: () =>
          import('./core/features/diagnosis/history/history.component')
            .then(m => m.HistoryComponent),
        title: 'history page'
      },

      { path: 'awareness', component: AwarenessComponent, title: 'awareness page' },
      { path: 'chatbot', component: ChatbotComponent, title: 'chatbot page' },
      { path: 'about', component: AboutComponent, title: 'about page' },

    ]
  },

  // ================= NOT FOUND =================
  { path: '**', component: NotfoundComponent, title: '404 not found page' }

];
