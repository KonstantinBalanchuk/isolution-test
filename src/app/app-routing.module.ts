import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user-component/user.component';
import { SearchComponent } from './search-component/search.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: 'user/:id', component: UserComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
