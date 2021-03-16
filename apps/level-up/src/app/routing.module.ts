import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  {
    path: '', children: [
      { path: '', redirectTo: '/projects', pathMatch: 'full' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'project/:id', component: ProjectItemComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
