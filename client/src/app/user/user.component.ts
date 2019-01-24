import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { UserService } from '../../services/user.service'; 

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	constructor(public _userService: UserService,public change: ChangeDetectorRef) { }
	
	ngViewAfterChecked(){
		this.change.detectChanges();
	}

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
			this.users[0].push(res);
		},err=>{
			console.log("ERROR",err);
		})	
	}

	getUsers(){
		this._userService.getUsers();
	}


	deleteUser(user_id,i){
		console.log(this.users);
		console.log("userid",user_id);
		this._userService.deleteUser(user_id);
		this.users.splice[0](i,1);
	}

}






