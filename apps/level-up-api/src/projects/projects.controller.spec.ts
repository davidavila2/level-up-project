import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { mockProject, mockProjects, updatedMockProject } from './test.utils';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn()
});

describe('ProjectsController', () => {
  let controller: ProjectsController;
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        ProjectsService,
        {
          provide: getRepositoryToken(Project),
          useFactory: createMockRepository
        }
      ],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
    service = module.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#findAll', () => {
    it('should return all projects', async () => {
      jest.spyOn(service, 'findAll').mockImplementation(async () => {
        return mockProjects;
      });

      expect(await controller.findAll()).toBe(mockProjects);
    });
  });

  describe('#findOne', () => {
    it('should return a project', async () => {
      jest.spyOn(service, 'findOne').mockImplementation(async () => {
        return mockProject;
      });

      expect(await controller.findOne(mockProject.id)).toBe(mockProject);
    });
  });

  describe('#create', () => {
    it('should create a project', async () => {
      jest.spyOn(service, 'create').mockImplementation(async () => {
        return mockProject
      });

      expect(await controller.create(mockProject)).toBe(mockProject)
    });
  });

  describe('#update', () => {
    it('should update a project', async () => {
      jest.spyOn(service, 'update').mockImplementation(async () => {
        return updatedMockProject
      });

      expect(await controller.update(mockProject.id, mockProject)).toBe(updatedMockProject)
    });
  });

  describe('#delete', () => {
    it('should delete a project', async () => {
      jest.spyOn(service, 'remove').mockImplementation(async () => {
        return null
      });

      expect(await controller.remove(mockProject.id)).toBe(null);
    });
  });
});
