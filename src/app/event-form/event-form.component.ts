import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})

export class EventFormComponent implements OnInit {
  constructor() {}

  eventForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    start: new FormControl(),
    startTimezone: new FormControl(),
    end: new FormControl(),
  });

  @Output()
  newEvent: EventEmitter<Event> = new EventEmitter();

  handleSubmit() {
    const event = this.eventForm.value;
    this.newEvent.emit({
      ...event,
    });
    this.eventForm.reset();
  }
  ngOnInit() {}
}