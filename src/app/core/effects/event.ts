import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable, } from 'rxjs';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import { Load } from './../actions/event';

import {
  EventActions,
  LoadFail,
  LoadSuccess,
  AddEventSuccess,
  AddEventFail,
  EventActionTypes,
  AddEvent,
} from '../actions/event';
import { Event } from '../../models/event';
import { switchMap, toArray, map, catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class EventEffects {
  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the database open call in `defer` makes
   * effect easier to test.
   */
  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('events_app');
  });

  @Effect()
  loadEvents$: Observable<Action> = this.actions$.pipe(
    ofType(EventActionTypes.Load),
    switchMap(() =>
      this.db
        .query('events')
        .pipe(
          toArray(),
          map((events: Event[]) => new LoadSuccess(events)),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  @Effect()
  addEvent$: Observable<Action> = this.actions$.pipe(
    ofType(EventActionTypes.AddEvent),
    map((action: AddEvent) => action.payload),
    mergeMap(event =>
      this.db
        .insert('events', [event])
        .pipe(
          map(() => {
            this.router.navigate(['/events']);
            return new AddEventSuccess(event);
          }),
          catchError(() => of(new AddEventFail(event)))
        )
    )
  );

  constructor(private actions$: Actions, private db: Database,private router: Router) {}
}
