import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreDataModule, Project, ProjectsService } from '@level-up/core-data';
import { CoreStateModule } from '@level-up/core-state'
import { MaterialModule } from '@level-up/material';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { RoutingModule } from './routing.module';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    RoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    { provide: Project, useClass: ProjectsService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
