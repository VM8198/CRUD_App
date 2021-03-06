import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component'
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service'; 



@Component({
	selector: 'app-update-form',
	templateUrl: './update-form.component.html',
	styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
	public id: string;
	detailsToUpdate:any;
	constructor(private route: ActivatedRoute,public _userService: UserService) { 
		this.route.queryParams.subscribe(params=>{
			this.id = this.route.snapshot.paramMap.get('id');			
			this._userService.getUserById(this.id);
		})
	}

	ngOnInit() {
		setTimeout(()=>{			
			this.detailsToUpdate = this._userService.foundUser[0];
		},1000);
	}
	updateUser(detailsToUpdate){
		console.log(".ts update array",this.detailsToUpdate);
		this._userService.updateUser(this.detailsToUpdate);
	}
}
