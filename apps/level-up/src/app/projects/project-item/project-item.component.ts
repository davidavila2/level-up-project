import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { ProjectFacade } from '@level-up/core-state';
import { Observable } from 'rxjs';
import { Project } from '@level-up/core-data';

@Component({
  selector: 'level-up-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  project$: Observable<Project> = this.projectsFacade.current$;

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    public projectsFacade: ProjectFacade
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.projectsFacade.load(res.id)
      this.projectsFacade.selectByKey(res.id);
    });
  }
}
