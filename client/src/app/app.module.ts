import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { appRoutes } from './routes';
import { UserService } from './shared/user.service';
import { AuthGuard } from './authGuard/auth.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthInterceptor } from './authGuard/auth.interceptor';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LecturerDashboardComponent } from './lecturer/lecturer-dashboard/lecturer-dashboard.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AddDegreeComponent } from './admin/add-degree/add-degree.component';

// angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { ModulesComponent } from './admin/modules/modules.component';
import {MatCardModule} from '@angular/material/card';
import { AddSectionComponent } from './lecturer/add-section/add-section.component';
import { StudentProjectComponent } from './student/student-project/student-project.component';
import { StudentNavbarComponent } from './student/student-navbar/student-navbar.component';
import { SubmitComponent } from './student/submit/submit.component';
import { LecturerNavbarComponent } from './lecturer/lecturer-navbar/lecturer-navbar.component';
import { ViewSubmissionsComponent } from './lecturer/view-submissions/view-submissions.component';
import { ViewProjectsComponent } from './lecturer/view-projects/view-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentRegisterComponent,
    AddDegreeComponent,
    UserLoginComponent,
    StudentDashboardComponent,
    AdminDashboardComponent,
    LecturerDashboardComponent,
    AdminNavbarComponent,
    AddModuleComponent,
    ModulesComponent,
    AddSectionComponent,
    StudentProjectComponent,
    StudentNavbarComponent,
    SubmitComponent,
    LecturerNavbarComponent,
    ViewSubmissionsComponent,
    ViewProjectsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    UserService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
