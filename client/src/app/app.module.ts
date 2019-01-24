import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ActivatedRoute } from '@angular/router'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateFormComponent } from './update-form/update-form.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    StudentComponent,
    SubjectComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UpdateFormComponent,
    UpdatePostComponent,
    UpdateStudentComponent,
    UpdateSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
