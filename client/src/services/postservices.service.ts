import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostservicesService {

  constructor(public http:HttpClient) { }

addPost(body){
		return this.http.post("http://localhost:4000/post",body);
	}

	post_services = [];

	getPosts(){
	 		this.http.get("http://localhost:4000/posts").subscribe(res=>{						
			this.post_services.push(res);			
			return this.post_services;			
		},err=>{
			console.log(err);
		})
	}

foundPost:any;
	getPostById(id){
		this.http.get("http://localhost:4000/post/"+id).subscribe(res=>{
			console.log("foundPost :",res);
			return this.foundPost = res;
		},err=>{
			console.log(err);
		});;
	}

	updatePost(body){
			return this.http.put("http://localhost:4000/updatepost",body).subscribe(res=>{
				console.log("service_body : ",res);
			},err=>{
				console.log(err);
			});
	}

	deletePost(uid){
		console.log("uid :",uid);
		var id = uid;
		return this.http.delete("http://localhost:4000/deletepost/"+id).subscribe(res=>{
			console.log("delete from service :" ,res);			
		},err=>{
			console.log(err);
		})
	}
}
