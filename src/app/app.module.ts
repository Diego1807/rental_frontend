import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserService } from './user.service';
import { ItemsService } from './items.service';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { LendItemComponent } from './lend-item/lend-item.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchItemComponent } from './search-item/search-item.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [ AuthGuard ],
    component: DashboardComponent
  },
  {
    path: 'lendItem',
    canActivate: [ AuthGuard ],
    component: LendItemComponent
  },
  {
    path: 'createUser',
    component: CreateUserComponent
  },  
  {
    path: 'searchItem',
    canActivate: [ AuthGuard ],
    component: SearchItemComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    DashboardComponent,
    LendItemComponent,
    CreateUserComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [
    UserService,
    ItemsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
