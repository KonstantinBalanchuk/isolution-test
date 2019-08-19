import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubApiComponent } from './github-api/github-api.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainService } from './main.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GithubApiComponent,
    UserComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
