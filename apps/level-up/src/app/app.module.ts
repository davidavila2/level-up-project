import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreDataModule, Project, ProjectsService } from '@level-up/core-data';
import { CoreStateModule } from '@level-up/core-state'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule
  ],
  providers: [
    // { provide: Project, useClass: ProjectsService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
