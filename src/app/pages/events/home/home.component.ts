import { async } from '@angular/core/testing';
import { getEvents } from './../../../core/reducers/index';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromEvents from '../../../core/reducers';
import * as events from '../../../core/actions/event';
import { Event } from '../../../models/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events$: Observable<Event[]>;

  constructor(private store: Store<fromEvents.EventsState>) {
    this.events$ = store.pipe(select(fromEvents.getEvents));
  }

  ngOnInit(): void {
    this.store.dispatch(new events.Load());
  }

}
