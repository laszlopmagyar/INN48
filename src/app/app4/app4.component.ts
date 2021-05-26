import { Component, OnInit } from '@angular/core';
import resources from '../../assets/people.json';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})
export class App4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  showResources: boolean = false;
  skillSet: string = '';
  resourceList: {
        name: string,
        contact_email: string,
        contact_phone: string,
        skills: string,
    }[] = resources
  
  showList() {
      this.showResources = true;
    }
  
  clearList() {
    this.showResources = false;
    this.skillSet = '';
  }
}
