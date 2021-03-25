import { Entity, Column, PrimaryColumn } from 'typeorm';
import { ProjectStatus } from '../project.enum';

@Entity({
  name: 'Project'
})
export class Project {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ProjectStatus
  })
  status: string
}
