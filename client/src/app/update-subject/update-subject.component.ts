import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostservicesService } from '../../services/postservices.service';
import { SubjectService }  from '../../services/subject.service'; 


@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {
public id: string;
	detailsToUpdate:any;
	constructor(private route: ActivatedRoute,public _subjectService: SubjectService) { 
		this.route.queryParams.subscribe(params=>{
			this.id = this.route.snapshot.paramMap.get('id');			
			this._subjectService.getSubjectById(this.id);
		})
	}

	ngOnInit() {
		setTimeout(()=>{			
			this.detailsToUpdate = this._subjectService.foundSubject[0];
		},1000);
	}
	updateSubject(detailsToUpdate){
		console.log(".ts update array",this.detailsToUpdate);
		this._subjectService.updateSubject(this.detailsToUpdate);
	}
}
