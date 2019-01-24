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
    UpdateFormComponent
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
