import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Project> {
    return this.projectsService.findOne(id);
  }

  @Post()
  create(@Body() project: Project): Promise<Project> {
    return this.projectsService.create(project);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() project: Project): Promise<Project> {
    return this.projectsService.update(id, project);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.projectsService.remove(id);
  }
}
