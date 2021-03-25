import { Project } from "./entities/project.entity";

export const mockProject: Project = {
  id: 'mockId',
  title: 'mock',
  description: 'mock description',
  status: 'mock status'
};

export const updatedMockProject: Project = {
  id: 'mockId',
  title: 'mock',
  description: 'mock description',
  status: 'mock status'
};

export const mockProjects: Project[] = [
  {
    id: 'mockId',
    title: 'mock',
    description: 'mock description',
    status: 'mock status'
  },
  {
    id: 'mockId2',
    title: 'mock2',
    description: 'mock description2',
    status: 'mock status2'
  }
];
