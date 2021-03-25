import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Project } from './entities/project.entity';
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

describe('ProjectsService', () => {
  let service: ProjectsService;
  let projectRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
        {
          provide: getRepositoryToken(Project),
          useFactory: createMockRepository
        }
      ],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
    projectRepository = module.get<MockRepository>(getRepositoryToken(Project));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#findAll', () => {
    it("should get all projects", () => {
      projectRepository.find.mockReturnValue(mockProjects);

      const project = service.findAll();

      expect(project).toBe(mockProjects);
    });
  });

  describe('#findOne', () => {
    it("should get one project", () => {
      projectRepository.findOne.mockReturnValue(mockProject);

      const project = service.findOne(mockProject.id);

      expect(project).toBe(mockProject);
    });
  });

  describe('#create', () => {
    it("should create a project", () => {
      projectRepository.save.mockReturnValue(mockProject);

      const project = service.create(mockProject);

      expect(project).toBe(mockProject);
    });
  });

  describe('#update', () => {
    it("should update a project", async () => {
      projectRepository.update.mockReturnValue(updatedMockProject);

      const project = await service.update(updatedMockProject.id, updatedMockProject);

      expect(project).toBe(updatedMockProject);
    });
  });

  describe('#delete', () => {
    it("should delete a project", async () => {
      projectRepository.delete.mockReturnValue(mockProject);

      const project = await service.remove(mockProject.id);

      expect(project).toBe(undefined);
    });
  });
});
