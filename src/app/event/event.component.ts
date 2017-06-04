import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/event/shared/event.service';

@Component({
  selector: 'yo-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    return this.events = this.eventService.getEvents();
  }

}
