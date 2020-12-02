import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})

export class EventFormComponent implements OnInit {
  constructor() {}

  //Toggle Display / Hide
    public toggleText = 'Show';
    public show = false;

    public enabled = true;
    public duration = 400;
    public type = 'slide';
    public direction = 'down';

    public get animate(): any {
        if (this.enabled) {
            return {
                type: this.type,
                direction: this.direction,
                duration: this.duration
            };
        }

        return false;
    }

    public get hasDirection(): boolean {
        return this.type === 'slide' || this.type === 'expand';
    }

    public onToggle(): void {
        this.show = !this.show;
        this.toggleText = this.show ? 'Hide' : 'Show';
    }
 
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