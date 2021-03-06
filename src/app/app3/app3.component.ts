import { Component, OnInit } from '@angular/core';
import projects from '../../assets/projects.json';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  value: string = '';
  showProject: boolean = false;
  skill: string = '';
  title = "Search";
  projectList: {
        name: string,
        long_description: string,
        short_description: string,
        skills: string,
        current_state: string
    }[] = projects

   
    
    showList() {
      this.showProject = true;
    }
  
  clearList() {
    this.showProject = false;
    this.skill = '';
  }

}
