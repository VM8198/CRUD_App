import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostservicesService } from '../../services/postservices.service';
import { StudentservicesService }  from '../../services/studentservices.service'; 

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
public id: string;
	detailsToUpdate:any;
	constructor(private route: ActivatedRoute,public _studentService: StudentservicesService) { 
		this.route.queryParams.subscribe(params=>{
			this.id = this.route.snapshot.paramMap.get('id');			
			this._studentService.getStudentById(this.id);
		})
	}

	ngOnInit() {
		setTimeout(()=>{			
			this.detailsToUpdate = this._studentService.foundStudent[0];
		},1000);
	}
	updateStudent(detailsToUpdate){
		console.log(".ts update array",this.detailsToUpdate);
		this._studentService.updateStudent(this.detailsToUpdate);
	}
}
