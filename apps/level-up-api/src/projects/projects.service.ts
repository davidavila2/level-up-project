import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private projects: Repository<Project>) { }

  create(project: Project): Promise<Project> {
    return this.projects.save((project.id = uuidv4(), project))
  }

  findAll(): Promise<Project[]> {
    return this.projects.find();
  }

  findOne(id: string): Promise<Project> {
    return this.projects.findOne(id);
  }

  async update(id: string, project: Project): Promise<Project> {
    await this.projects.update(id, project);
    return project;
  }

  async remove(id: string): Promise<void> {
    await this.projects.delete(id);
  }
}
