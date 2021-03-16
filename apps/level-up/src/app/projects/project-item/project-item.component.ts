import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Project } from '@level-up/core-data';
import { ProjectFacade } from '@level-up/core-state';

@Component({
  selector: 'level-up-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  project$: Observable<Project> = this.projectsFacade.current$;

  constructor(
    private route: ActivatedRoute,
    public projectsFacade: ProjectFacade
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.projectsFacade.load(res.id)
      this.projectsFacade.selectByKey(res.id);
    });
  }
}
