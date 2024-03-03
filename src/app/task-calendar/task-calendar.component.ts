import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-task-calendar',
  templateUrl: './task-calendar.component.html',
  styleUrl: './task-calendar.component.scss'
})
export class TaskCalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [
      {
        title: 'Event 1',
        start: '2024-02-01',
        color: 'red' 
      },
      {
        title: 'Event 2',
        start: '2024-02-22',
        color: 'blue' 
      },
      {
        title: 'Event 1',
        start: '2024-02-15',
        color: 'yellow' // Specify the color for Event 1
      },
      {
        title: 'Event 2',
        start: '2024-02-18',
        color: 'green' // Specify the color for Event 2
      }
      
    ]
  };
}
