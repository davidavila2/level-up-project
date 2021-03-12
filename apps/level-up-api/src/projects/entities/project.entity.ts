import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';
import { ProjectStatus } from '../project.enum';

@Entity({
  name: 'Project'
})
export class Project extends BaseEntity {
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
