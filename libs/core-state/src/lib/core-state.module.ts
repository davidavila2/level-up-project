import { NgModule } from '@angular/core';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.state';
import { ProjectsEffects } from './project.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([
      ProjectsEffects
    ]),
    NgrxAutoEntityModule.forRoot()
  ],
})
export class CoreStateModule { }
