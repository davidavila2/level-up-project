import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreDataModule, Project, EntityService } from '@level-up/core-data';
import { CoreStateModule } from '@level-up/core-state'
import { MaterialModule } from '@level-up/material';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { RoutingModule } from './routing.module';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component'


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
    RouterModule,
    RoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    { provide: Project, useClass: EntityService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
