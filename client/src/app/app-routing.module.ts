import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {StudentComponent} from './student/student.component';
import {PostComponent} from './post/post.component';
import {SubjectComponent} from './subject/subject.component';
import {UpdateFormComponent} from './update-form/update-form.component';
import {UpdatePostComponent} from './update-post/update-post.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {UpdateSubjectComponent} from './update-subject/update-subject.component';


const routes: Routes = [

	{path: 'user', component: UserComponent},
	{path: 'post', component: PostComponent},
	{path: 'student', component: StudentComponent},
	{path: 'subject', component: SubjectComponent},
	{path: 'update/:id', component: UpdateFormComponent },
	{path: 'updatePost/:id', component: UpdatePostComponent},
	{path: 'updateStudent/:id', component: UpdateStudentComponent},
	{path: 'updateSubject/:id', component: UpdateSubjectComponent}
	

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
