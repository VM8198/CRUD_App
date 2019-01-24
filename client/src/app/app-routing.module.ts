import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {StudentComponent} from './student/student.component';
import {PostComponent} from './post/post.component';
import {SubjectComponent} from './subject/subject.component';
import {UpdateFormComponent} from './update-form/update-form.component';


const routes: Routes = [

	{path: 'user', component: UserComponent},
	{path: 'post', component: PostComponent},
	{path: 'student', component: StudentComponent},
	{path: 'subject', component: SubjectComponent},
	{path: 'update/:id', component: UpdateFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
