import { Project } from './../../models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;
  public confirm: boolean;

  constructor(private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const id = params.id;
      this.getProject(id);
    });
  }

  getProject(id) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(error as any);

      }
    );
  }

  setConfirm(confirm) {
    this.confirm = confirm;
  }

  deleteProject(id) {
    this._projectService.deleteProject(id).subscribe(
      response => {
        if (response.project) {
          this._router.navigate(['/proyectos']);
        }
      },
      error => {
        console.log(error as any);

      }
    );
  }

}
