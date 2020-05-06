import { Global } from './../../services/global';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from './../../models/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public url: string;

  constructor(private _projectService: ProjectService) {
    this.url = Global.url;
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this._projectService.getProjects().subscribe(
      response => {
        // console.log(response);
        if (response.projects) {
          this.projects = response.projects;
        }
      },
      error => {
        console.log(error as any);
      }
    );
  }
}
