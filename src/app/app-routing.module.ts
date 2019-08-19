import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {GithubApiComponent} from './github-api/github-api.component';
import {NotfoundComponent} from './notfound/notfound.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: 'user/:id', component: UserComponent },
  { path: 'search', component: GithubApiComponent },
  { path: '**', component: NotfoundComponent }
];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
