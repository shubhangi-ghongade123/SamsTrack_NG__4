import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'get-all-user',
    component: UserListComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent,
  },
  {
    path: 'get-all-subject',
    component: SubjectListComponent,
  },
  {
    path:'get-subject-by-id/:id',
    component: EditSubjectComponent
  },
  {
    path:'attendance',
    component: AttendanceComponent
  },
  {
    path:'view-attendance',
    component: ViewAttendanceComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
