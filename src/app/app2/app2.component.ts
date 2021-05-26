import { Component, OnInit } from '@angular/core';
import mentors from '../../assets/mentors.json';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  
  value: string = '';
  showMentors: boolean = false;
  skill: string = '';
  title = "Search";
  mentorsList: {
        name: string,
        contact_email: string,
        contact_phone: string,
        skills: string
    }[] = mentors

   
    
    showList() {
      this.showMentors = true;
    }
  
  clearList() {
    this.showMentors = false;
    this.skill = '';
  }
}
