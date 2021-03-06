/* eslint-disable @typescript-eslint/no-empty-function */
import { of } from 'rxjs';

export class ProjectFacadeStub {
  get mutations$() {
    return of(null);
  }

  load() { }

  loadAll() { }

  create() { }

  update() { }

  delete() { }

  deselect() { }

  select() { }

  selectByKey() { }
}
