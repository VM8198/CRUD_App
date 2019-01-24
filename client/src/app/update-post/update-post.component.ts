import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component'
import { ActivatedRoute } from '@angular/router';
import { PostservicesService } from '../../services/postservices.service'; 

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
public id: string;
	detailsToUpdate:any;
	constructor(private route: ActivatedRoute,public _postService: PostservicesService) { 
		this.route.queryParams.subscribe(params=>{
			this.id = this.route.snapshot.paramMap.get('id');			
			this._postService.getPostById(this.id);
		})
	}

	ngOnInit() {
		setTimeout(()=>{			
			this.detailsToUpdate = this._postService.foundPost[0];
		},1000);
	}
	updatePost(detailsToUpdate){
		console.log(".ts update array",this.detailsToUpdate);
		this._postService.updatePost(this.detailsToUpdate);
	}
}
