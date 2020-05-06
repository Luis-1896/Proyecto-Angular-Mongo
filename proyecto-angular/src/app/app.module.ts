import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { CreateComponent } from './componentes/create/create.component';
import { ConstactComponent } from './componentes/constact/constact.component';
import { ErrorComponent } from './componentes/error/error.component';
import { DetailComponent } from './componentes/detail/detail.component';
import { EditComponent } from './componentes/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ConstactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
