import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";

import { MaterialModule } from '@level-up/material';
import { mockProjects, mockProject } from '../test.utils';
import { ProjectListComponent } from './project-list.component';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectListComponent],
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule
      ]
    })

      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    component.projects = mockProjects
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should test the outputs', () => {
    it('describe output selected', () => {
      component.selected.subscribe((selected) => expect(selected).toBe(mockProject));
    });

    it('describe output deleted', () => {
      component.selected.subscribe((deleted) => expect(deleted).toBe(mockProject));
    });
  });
});
