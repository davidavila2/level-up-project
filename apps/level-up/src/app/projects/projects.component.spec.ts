import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { mockProject, formReset } from './test.utils';

import { provideMockStore } from '@ngrx/store/testing';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';

import { CoreStateModule, ProjectFacade, ProjectFacadeStub } from '@level-up/core-state';
import { MaterialModule } from '@level-up/material';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';

import { ProjectsComponent } from './projects.component';
import { Project } from '@level-up/core-data';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let projectsFacade: ProjectFacade;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectListComponent,
        ProjectDetailComponent
      ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        CoreStateModule,
        BrowserAnimationsModule,
        NgrxAutoEntityModule.forRoot()
      ],
      providers: [
        provideMockStore(),
        {
          provide: ProjectFacade,
          useClass: ProjectFacadeStub
        },
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    projectsFacade = TestBed.inject(ProjectFacade);
    component.form = formBuilder.group({
      id: null,
      title: '',
      description: '',
      status: ''
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#selectProject', () => {
    it('should patch the form', () => {
      component.form.patchValue(mockProject);

      expect(component.form.value).toEqual(mockProject)
    });

    it('should select a project', () => {
      jest.spyOn(projectsFacade, 'select');

      component.selectProject(mockProject);

      expect(projectsFacade.select).toHaveBeenCalledWith(mockProject);
    });
  });

  describe('#resetProject', () => {
    it('should reset the form', () => {
      component.form.patchValue(mockProject);

      component.form.reset();

      expect(component.form.value).toEqual(formReset);
    });

    it('should deselect', () => {
      jest.spyOn(projectsFacade, 'deselect');

      projectsFacade.deselect();

      expect(projectsFacade.deselect).toHaveBeenCalled();
    });
  });

  describe('#createProject', () => {
    it('should create a project', () => {
      jest.spyOn(projectsFacade, 'create');

      component.createProject(mockProject);

      expect(projectsFacade.create).toHaveBeenCalledWith(mockProject);
    });
  });

  describe('#updateProject', () => {
    it('should update a project', () => {
      jest.spyOn(projectsFacade, 'update');

      component.updateProject(mockProject);

      expect(projectsFacade.update).toHaveBeenCalledWith(mockProject);
    });
  });

  describe('#deleteProject', () => {
    it('should delete a project', () => {
      jest.spyOn(projectsFacade, 'delete');

      component.deleteProject(mockProject);

      expect(projectsFacade.delete).toHaveBeenCalledWith(mockProject);
    });
  });

  describe('#saveProject', () => {
    it('should call create if no project id is available', () => {
      jest.spyOn(component, 'createProject');

      component.createProject(mockProject);

      expect(component.createProject).toHaveBeenCalled();
    });

    it('should call update if a project id is available', () => {
      jest.spyOn(component, 'updateProject');

      component.updateProject(mockProject);

      expect(component.updateProject).toHaveBeenCalled();
    });
  });

  describe('#ngOninit', () => {
    it('should call load all project', () => {
      jest.spyOn(projectsFacade, 'loadAll');

      projectsFacade.loadAll(Project);

      expect(projectsFacade.loadAll).toHaveBeenCalledWith(Project);
    });

    it('should invoke reset project', () => {
      jest.spyOn(component, 'resetProject');

      component.resetProject()

      expect(component.resetProject).toHaveBeenCalled();
    });
  });
});
