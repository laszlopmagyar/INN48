import { Component } from "@angular/core";
import projects from './projects.json';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html'
})
export class projectComponent {
    title = "Search";
    projectList: {
        name: string,
        long_description: string,
        short_description: string,
        skills: string,
        current_state: string
    }[] = projects
}