import { Component, OnInit } from '@angular/core';
import { StudentservicesService } from '../../services/studentservices.service'


@Component({
	selector: 'app-student',
	templateUrl: './student.component.html',
	styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

	constructor(public _studentService: StudentservicesService) { }
	

	details = {
		first_name: "",
		last_name: ""
	};

	
	students = [];

	ngOnInit() {
		this.getStudents();
		console.log("services array",this._studentService.student_services);		
		this.students = this._studentService.student_services;
		console.log("students of component.ts",this.students);		
	}

	addStudents(details){		
		this._studentService.addStudents(details).subscribe(res=>{
			console.log("RESPONSE From API",res);
		},err=>{
			console.log("ERROR",err);
		})	
	}

	getStudents(){
		this._studentService.getStudents();
	}

	deleteStudent(student_id){
		console.log(this.students);
		console.log("userid",student_id);
		this._studentService.deleteStudent(student_id);
	}

}
