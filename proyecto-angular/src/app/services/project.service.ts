import { Global } from './global';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando el servicio de Angular';
  }

  saveProject(project: Project): Observable<any> { //Devolvera un observable
    const params = JSON.stringify(project);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'save-project', params, { headers });
  }

  getProjects(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'projects', { headers });
  }

  getProject(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'project/' + id, { headers });
  }

  deleteProject(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'project/' + id, { headers });
  }

  updateProject(project): Observable<any> {
    const params = JSON.stringify(project);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + 'project/' + project._id, params, { headers });
  }

}
