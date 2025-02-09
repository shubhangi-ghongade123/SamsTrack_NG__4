import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    WelcomeComponent,
    HeaderComponent,
    UserMenuComponent,
    AdminMenuComponent,
    UserListComponent,
    AddUserComponent,
    AddSubjectComponent,
    SubjectListComponent,
    EditSubjectComponent,
    AttendanceComponent,
    ViewAttendanceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
