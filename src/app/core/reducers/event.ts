import {
  EventActionTypes,
  EventActions
} from '../actions/event';
import { Event } from '../../models/event';

export interface State {
  loaded: boolean;
  loading: boolean;
  //ids: string[];
  eventObjs: Event[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  eventObjs: []
  //ids: [],
};

export function reducer(
  state = initialState,
  action: EventActions
): State {
  switch (action.type) {
    case EventActionTypes.Load: {
      return {
        ...state,
        loading: true,
      };
    }

    case EventActionTypes.LoadSuccess: {
      return {
        loaded: true,
        loading: false,
        eventObjs: action.payload.map(event => event),
      };
    }

    case EventActionTypes.AddEventSuccess:{

      if(state.eventObjs == undefined)
        state.eventObjs = [];

      //if (state.eventObjs.find(action.payload.id) > -1) {
      let eState = state.eventObjs.find(e => e.id == action.payload.id);
      if (eState != null) {
        return state;
      }

      return {
        ...state,
        eventObjs: [...state.eventObjs, action.payload],
      };
    }

    case EventActionTypes.AddEventFail: {
      return {
        ...state,
        eventObjs: state.eventObjs.filter(event => event.id !== action.payload.id),
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getEvents = (state: State) => state.eventObjs;
