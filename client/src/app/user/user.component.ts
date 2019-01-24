import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; 

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	constructor(public _userService: UserService) { }
	

	details = {
		name: "",
		phone: ""
	};

		
users = [];

	ngOnInit() {
		this.getUsers();
		console.log("services array",this._userService.users_services);		
		this.users = this._userService.users_services;
		console.log("users of component.ts",this.users);		
	}


	addData(details){		
		this._userService.addData(details).subscribe(res=>{
			console.log("RESPONSE From API",res);
		},err=>{
			console.log("ERROR",err);
		})	
	}

	getUsers(){
		this._userService.getUsers();
	}
}






