/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAutoEntityService, IEntityInfo } from '@briebug/ngrx-auto-entity';

const BASE_URL = 'http://localhost:3000/api'

@Injectable()
export class EntityService implements IAutoEntityService<any> {
  constructor(private http: HttpClient) {
  }

  load(entityInfo: IEntityInfo, id: any): Observable<any> {
    return this.http.get<any>(
      `${BASE_URL}/${entityInfo.modelName}/${id}`
    );
  }

  loadAll(entityInfo: IEntityInfo): Observable<any[]> {
    return this.http.get<any[]>(
      `${BASE_URL}/${entityInfo.modelName}`
    );
  }

  create(entityInfo: IEntityInfo, entity: any): Observable<any> {
    return this.http.post<any>(
      `${BASE_URL}/${entityInfo.modelName}`,
      entity
    );
  }

  update(entityInfo: IEntityInfo, entity: any): Observable<any> {
    return this.http.patch<any>(
      `${BASE_URL}/${entityInfo.modelName}/${entity.id}`,
      entity
    );
  }

  delete(entityInfo: IEntityInfo, entity: any): Observable<any> {
    return this.http.delete<any>(
      `${BASE_URL}/${entityInfo.modelName}/${entity.id}`
    ).pipe(map(() => entity));
  }
}
