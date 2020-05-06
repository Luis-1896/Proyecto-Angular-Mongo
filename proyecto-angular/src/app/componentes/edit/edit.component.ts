import { Global } from './../../services/global';
import { ProjectService } from './../../services/project.service';
import { Project } from './../../models/project';
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]

})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.title = 'Editar proyecto';
    this.url = Global.url;
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

  onSubmit() {
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if (response.project) {
          /*Subir la imagen */
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                this.save_project = result.project;
                this.status = 'success';
              });
          } else {
            this.save_project = response.project;
            this.status = 'success';
          }

        } else {
          this.status = 'failed';
        }
      },
      error => { }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files as Array<File>;
  }

}
