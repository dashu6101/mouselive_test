import { Action } from '@ngrx/store';
import { Event } from '../../models/event';
import { Router } from '@angular/router';

export enum EventActionTypes {
  AddEvent = '[Event] Add Event',
  AddEventSuccess = '[Event] Add Event Success',
  AddEventFail = '[Event] Add Event Fail',
  Load = '[Event] Load',
  LoadSuccess = '[Event] Load Success',
  LoadFail = '[Event] Load Fail',
}

/**
 * Add Book to Collection Actions
 */
export class AddEvent implements Action {
  readonly type = EventActionTypes.AddEvent;
  constructor(public payload: Event) {
  }
}

export class AddEventSuccess implements Action {
  readonly type = EventActionTypes.AddEventSuccess;

  constructor(public payload: Event) {
  }
}

export class AddEventFail implements Action {
  readonly type = EventActionTypes.AddEventFail;

  constructor(public payload: Event) {
  }
}

/**
 * Load Collection Actions
 */
export class Load implements Action {
  readonly type = EventActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = EventActionTypes.LoadSuccess;

  constructor(public payload: Event[]) {}
}

export class LoadFail implements Action {
  readonly type = EventActionTypes.LoadFail;

  constructor(public payload: any) {}
}

export type EventActions =
  | AddEvent
  | AddEventSuccess
  | AddEventFail
  | Load
  | LoadSuccess
  | LoadFail;
