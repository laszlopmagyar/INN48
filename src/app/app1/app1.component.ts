import { Component, OnInit } from '@angular/core';
import projects from '../../assets/projects.json';



@Component({
    selector: 'app-app1',
    templateUrl: './app1.component.html',
    styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
 

    selectedOption: string;
    options = [
      { name: "Application (FIS)", value: 1 },
      { name: "Basic", value: 2 },
      { name: "Computer Languages", value: 3 },
      { name: "Corporate Finance", value: 4 },
      { name: "Customer Service", value: 5 },
      { name: "Human Resources", value: 6 },
      { name: "Management", value: 7 },
      { name: "Management Consulting", value: 8 },
      { name: "Microsoft Skills", value: 9 },
      { name: "Sales Management", value: 10 },
      { name: "Systems", value: 11 },
      { name: "Talent Management", value: 12 },
      { name: "Technical", value: 11 },
      { name: "Unix", value: 13 }
    ]
  


  constructor() {

   }

  ngOnInit(): void {
  }

    
    skill: string = '';
    title = "Search";
    projectList: {
        name: string,
        long_description: string,
        short_description: string,
        skills: string,
        current_state: string
    }[] = projects

   
    
    showList(x) {
        console.log('x')
        console.log(x)
        this.skill = x;
    }


}
