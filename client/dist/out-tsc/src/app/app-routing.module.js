import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { PostComponent } from './post/post.component';
import { SubjectComponent } from './subject/subject.component';
import { UpdateFormComponent } from './update-form/update-form.component';
var routes = [
    { path: 'user', component: UserComponent },
    { path: 'post', component: PostComponent },
    { path: 'student', component: StudentComponent },
    { path: 'subject', component: SubjectComponent },
    { path: 'update/:id', component: UpdateFormComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map