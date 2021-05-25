import { Component, OnInit } from '@angular/core';
import projects from '../../assets/projects.json';

@Component({
    selector: 'app-app1',
    templateUrl: './app1.component.html',
    styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {

  constructor() { }

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