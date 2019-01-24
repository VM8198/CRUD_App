import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(public http:HttpClient) { }

  addSubjects(body){
		return this.http.post("http://localhost:4000/subject",body);
	}

	subject_services = [];

	getSubjects(){
	 		this.http.get("http://localhost:4000/subjects").subscribe(res=>{						
			this.subject_services.push(res);			
			console.log("service array",this.subject_services);
			return this.subject_services;			
		},err=>{
			console.log(err);
		})
	}

foundSubject:any;
	getSubjectById(id){
		this.http.get("http://localhost:4000/subject/"+id).subscribe(res=>{
			console.log("foundSubject :",res);
			return this.foundSubject = res;
		},err=>{
			console.log(err);
		});;
	}

	updateSubject(body){
			return this.http.put("http://localhost:4000/updatesubject",body).subscribe(res=>{
				console.log("service_body : ",res);
			},err=>{
				console.log(err);
			});
	}

	deleteSubject(uid){
		console.log("uid :",uid);
		var id = uid;
		return this.http.delete("http://localhost:4000/deletesubject/"+id).subscribe(res=>{
			console.log("delete from service :" ,res);
		},err=>{
			console.log(err);
		})
	}

}
