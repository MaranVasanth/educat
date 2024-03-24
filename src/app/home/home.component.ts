import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.grades();
    this.subjects('10th');
  }

  grade : any =[];
  subject : any =[];

  subjectValue :any='';

  hsc =[""];
  ssl=[];
  sslc =["Tamil","English","Mathamatics","Science","Social"];

  grades(){
    this.grade=['10th','11th','12th'];
  }

  subjects(event : any){
    this.subjectValue=event;
    if(event=='10th'){
      this.subject =this.sslc;
    }
  }
  s(event : any){
    this.subjectValue=event;
    if(event=='10th'){
      this.subject =this.sslc;
    }

  }
}
