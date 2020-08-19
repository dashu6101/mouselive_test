import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() events: Event[];
  constructor() { }

  ngOnInit(): void {

  }

  // removeEvent(id) {
  //   alert(id);
  // }

}
