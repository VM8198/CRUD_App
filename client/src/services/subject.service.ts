import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { config } from '../config'
 
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(public http:HttpClient) { }

  addSubjects(body){
		return this.http.post(config.apiBaseUrl+"/subject",body);
	}

	subject_services = [];

	getSubjects(){
	 		this.http.get(config.apiBaseUrl+"/subjects").subscribe(res=>{						
			this.subject_services.push(res);			
			console.log("service array",this.subject_services);
			return this.subject_services;			
		},err=>{
			console.log(err);
		})
	}

foundSubject:any;
	getSubjectById(id){
		this.http.get(config.apiBaseUrl+"/subject/"+id).subscribe(res=>{
			console.log("foundSubject :",res);
			return this.foundSubject = res;
		},err=>{
			console.log(err);
		});;
	}

	updateSubject(body){
			return this.http.put(config.apiBaseUrl+"/updatesubject",body).subscribe(res=>{
				console.log("service_body : ",res);
			},err=>{
				console.log(err);
			});
	}

	deleteSubject(uid){
		console.log("uid :",uid);
		var id = uid;
		return this.http.delete(config.apiBaseUrl+"/deletesubject/"+id).subscribe(res=>{
			console.log("delete from service :" ,res);
		},err=>{
			console.log(err);
		})
	}

}
