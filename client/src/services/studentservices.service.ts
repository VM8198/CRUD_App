import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentservicesService {

  constructor(public http:HttpClient) { }

	addStudents(body){
		return this.http.post("http://localhost:4000/student",body);
	}

	student_services = [];

	getStudents(){
	 		this.http.get("http://localhost:4000/students").subscribe(res=>{						
			this.student_services.push(res);			
			console.log("service array",this.student_services);
			return this.student_services;			
		},err=>{
			console.log(err);
		})
	}

foundStudent:any;
	getStudentById(id){
		this.http.get("http://localhost:4000/student/"+id).subscribe(res=>{
			console.log("foundStudent :",res);
			return this.foundStudent = res;
		},err=>{
			console.log(err);
		});;
	}

	updateStudent(body){

			return this.http.put("http://localhost:4000/updatestudent",body).subscribe(res=>{
				console.log("body",body);
				console.log("service_body : ",res);
			},err=>{
				console.log(err);
			});
	}

	deleteStudent(uid){
		console.log("uid :",uid);
		var id = uid;
		return this.http.delete("http://localhost:4000/deletestudent/"+id).subscribe(res=>{
			console.log("delete from service :" ,res);
		},err=>{
			console.log(err);
		})
	}

}
