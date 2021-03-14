import { Entity, Key } from '@briebug/ngrx-auto-entity';

@Entity({
  modelName: 'Project',
  uriName: 'projects'
})
export class Project {
  @Key id: string;
  title: string;
  description: string;
  status: STATUS
}

enum STATUS {
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
}
