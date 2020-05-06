import { ConstactComponent } from './componentes/constact/constact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { CreateComponent } from './componentes/create/create.component';
import { ErrorComponent } from './componentes/error/error.component';
import { DetailComponent } from './componentes/detail/detail.component';
import { EditComponent } from './componentes/edit/edit.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'crear-proyecto', component: CreateComponent },
  { path: 'contacto', component: ConstactComponent },
  { path: 'proyecto/:id', component: DetailComponent },
  { path: 'editar-proyecto/:id', component: EditComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
