import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'m1', component:M1Component},
  {path:'m2', component:M2Component},

  {path: '', redirectTo:'/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
