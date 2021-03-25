import { Entity, Key } from '@briebug/ngrx-auto-entity';

@Entity({
  modelName: 'projects',
  uriName: 'Projects'
})

export class Project {
  @Key id: string;
  title: string;
  description: string;
  status: string
}

export const emptyProject = {
  id: null,
  title: '',
  description: '',
  status: null
}

export const STATUS = [
  { label: 'Open', value: 'Open' },
  { label: 'In Progress', value: 'In Progress' },
  { label: 'Done', value: 'Done' },
]
