import { NgModule } from '@angular/core';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.state';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    NgrxAutoEntityModule.forRoot()
  ],
})
export class CoreStateModule { }
