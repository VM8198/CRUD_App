import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(public http:HttpClient) { }

	addData(body){
		return this.http.post("http://localhost:4000/user",body);
	}

	users_services = [];

	getUsers(){
	 		this.http.get("http://localhost:4000/users").subscribe(res=>{						
			this.users_services.push(res);			
			console.log("service array",this.users_services);
			return this.users_services;			
		},err=>{
			console.log(err);
		})
	}

foundUser:any;
	getUserById(id){
		this.http.get("http://localhost:4000/user/"+id).subscribe(res=>{
			console.log("foundUser :",res);
			return this.foundUser = res;
		},err=>{
			console.log(err);
		});;
	}

	updateUser(body){
			return this.http.put("http://localhost:4000/updateuser",body);
	}


}

