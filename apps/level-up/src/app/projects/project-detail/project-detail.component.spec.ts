import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@level-up/material';
import { mockProject } from '../test.utils';

import { ProjectDetailComponent } from './project-detail.component';
import { Project, STATUS } from '@level-up/core-data';


describe('ProjectDetailComponent', () => {
  let component: ProjectDetailComponent;
  let fixture: ComponentFixture<ProjectDetailComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectDetailComponent],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailComponent);
    component = fixture.componentInstance;
    component.selectedProject = mockProject;
    component.projectStatuses = STATUS
    component.project = mockProject;
    component.form = formBuilder.group({
      id: null,
      title: '',
      description: '',
      status: ''
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('The outputs', () => {
    it('should test that saved emits a value', () => {
      component.saved.emit(mockProject);

      component.saved.subscribe((project: Project) => {
        expect(project).toEqual(mockProject);
      });
    });

    it('should test that cancelled emits a value', () => {
      component.cancelled.emit();

      component.cancelled.subscribe((cancel) => {

        expect(cancel).toHaveBeenCalled();
      });
    });
  });
});
