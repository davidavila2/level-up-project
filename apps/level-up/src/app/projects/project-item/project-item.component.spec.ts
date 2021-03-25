import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { CoreStateModule, ProjectFacade, ProjectFacadeStub } from '@level-up/core-state';
import { MaterialModule } from '@level-up/material';
import { ProjectItemComponent } from './project-item.component';
import { mockProject } from '../test.utils';
import { ActivatedRoute } from '@angular/router';

describe('ProjectItemComponent', () => {
  let component: ProjectItemComponent;
  let fixture: ComponentFixture<ProjectItemComponent>;
  let projectsFacade: ProjectFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectItemComponent],
      providers: [
        provideMockStore(),
        {
          provide: ProjectFacade,
          useClass: ProjectFacadeStub
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 })
          }
        }
      ],
      imports: [
        CoreStateModule,
        RouterTestingModule,
        MaterialModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemComponent);
    component = fixture.componentInstance;
    projectsFacade = TestBed.inject(ProjectFacade);
    component.project$ = projectsFacade.current$;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOninit', () => {
    it('should load', () => {
      jest.spyOn(projectsFacade, 'load');

      projectsFacade.load(123);

      expect(projectsFacade.load).toHaveBeenCalledWith(123);
    });

    it('should selectByKey', () => {
      jest.spyOn(projectsFacade, 'selectByKey');

      projectsFacade.selectByKey(123);

      expect(projectsFacade.selectByKey).toHaveBeenCalledWith(123);
    });
  });
});
