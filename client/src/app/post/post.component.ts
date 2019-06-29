import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostservicesService } from '../../services/postservices.service'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	constructor(public _postService: PostservicesService, public change: ChangeDetectorRef) { }

	ngViewAfterChecked(){
		this.change.detectChanges();
	}
	

	details = {
		name: "",
		data: ""
	};

		
posts = [];

	ngOnInit() {
		this.getPosts();
		console.log("services array",this._postService.post_services);		
		this.posts = this._postService.post_services;
		console.log("post array",this.posts);
		console.log("users of component.ts",this.posts);		
	}


	addPosts(details){		
		this._postService.addPost(details).subscribe(res=>{
			console.log("RESPONSE From API",res);
			this.posts.push(res);			
		},err=>{
			console.log("ERROR",err);
		})	
	}

	getPosts(){
		this._postService.getPosts();
	}


	deletePost(post_id,i){
		console.log(this.posts);
		console.log("postid",post_id);
		this._postService.deletePost(post_id);
		console.log(i);
		console.log(this.posts[0]);
		this.posts[0].splice(i,1);
	}

}

