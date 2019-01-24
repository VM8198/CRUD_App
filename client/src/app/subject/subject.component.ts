import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(public _subjectService: SubjectService) { }
	

	details = {
		name: "",
		grade: ""
	};

	
	subjects = [];

	ngOnInit() {
		this.getSubjects();
		console.log("services array",this._subjectService.subject_services);		
		this.subjects = this._subjectService.subject_services;
		console.log("students of component.ts",this.subjects);		
	}

	addSubjects(details){		
		this._subjectService.addSubjects(details).subscribe(res=>{
			console.log("RESPONSE From API",res);
		},err=>{
			console.log("ERROR",err);
		})	
	}

	getSubjects(){
		this._subjectService.getSubjects();
	}

	deleteSubject(subject_id){
		console.log(this.subjects);
		console.log("subjectid",subject_id);
		this._subjectService.deleteSubject(subject_id);
	}


}
