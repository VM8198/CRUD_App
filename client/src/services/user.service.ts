import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { config } from '../config'

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(public http:HttpClient) { }

	addData(body){
		return this.http.post(config.apiBaseUrl+"/user",body);
	}

	users_services = [];

	getUsers(){
	 		this.http.get(config.apiBaseUrl+"/users").subscribe(res=>{						
			this.users_services.push(res);			
			console.log("service array",this.users_services);
			return this.users_services;			
		},err=>{
			console.log(err);
		})
	}

foundUser:any;
	getUserById(id){
		this.http.get(config.apiBaseUrl+"/user/"+id).subscribe(res=>{
			console.log("foundUser :",res);
			return this.foundUser = res;
		},err=>{
			console.log(err);
		});;
	}

	updateUser(body){
			return this.http.put(config.apiBaseUrl+"/updateuser",body).subscribe(res=>{
				console.log("service_body : ",res);
			},err=>{
				console.log(err);
			});
	}

	deleteUser(uid){
		console.log("uid :",uid);
		var id = uid;
		return this.http.delete(config.apiBaseUrl+"/deleteuser/"+id).subscribe(res=>{
			console.log("delete from service :" ,res);
		},err=>{
			console.log(err);
		})
	}


}

