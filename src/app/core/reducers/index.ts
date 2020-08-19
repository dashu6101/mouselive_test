import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromEvents from './event';
import * as fromRoot from '../reducers';

export interface EventsState {
  events: fromEvents.State;
}

// export interface State extends fromRoot.State {
//   events: EventsState;
// }

export const reducers: ActionReducerMap<EventsState> = {
  events: fromEvents.reducer,
};

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 *   constructor(state$: Observable<State>) {
 *     this.booksState$ = state$.pipe(select(getBooksState));
 *   }
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getEventsState = createFeatureSelector<EventsState>('events');

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getEventEntitiesState = createSelector(
  getEventsState,
  state => state.events
);

/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */

export const getEventState = createSelector(
  getEventsState,
  (state: EventsState) => state.events
);

export const getEventLoaded = createSelector(
  getEventState,
  fromEvents.getLoaded
);
export const getEventLoading = createSelector(
  getEventState,
  fromEvents.getLoading
);
export const getEventAdded = createSelector(
  getEventState,
  fromEvents.getEvents
);
export const getEvents = createSelector(
  getEventEntitiesState,
  getEventAdded,
  (entities, events) => {
    return events.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
);
