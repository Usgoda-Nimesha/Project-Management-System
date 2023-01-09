import { Routes } from '@angular/router';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { AuthGuard } from './authGuard/auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LecturerDashboardComponent } from './lecturer/lecturer-dashboard/lecturer-dashboard.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'lecturerDashboard',
    component: LecturerDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'studentDashboard',
    component: StudentDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: StudentRegisterComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
