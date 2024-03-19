import { Component, ChangeDetectorRef, ViewChild} from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

@Component({
  selector: 'app-task-calendar',
  templateUrl: './task-calendar.component.html',
  styleUrl: './task-calendar.component.scss'
})
export class TaskCalendarComponent {

  @ViewChild('fullcalendar') fullcalendar !: FullCalendarComponent;

  calendarEvents: EventInput[] = [
    {
      title: 'Event 1',
      start: '2024-03-01',
      color: 'red' 
    },
    {
      title: 'Event 2',
      start: '2024-03-22',
      color: 'blue' 
    },
    {
      title: 'Event 1',
      start: '2024-03-15',
      color: 'yellow' 
    },
    {
      title: 'Event 2',
      start: '2024-02-18',
      color: 'green' 
    }
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    events: this.calendarEvents
  }

  addEvent(title: string, start: string, color: string): void {
    const newEvent: EventInput = {
      title: title,
      start: start,
      color: color
    };
    this.calendarEvents = [...this.calendarEvents, newEvent];
    this.fullcalendar.getApi().addEvent(newEvent); // Add event to the calendar
  }
}
