import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { PopupModule } from '@progress/kendo-angular-popup';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TricksComponent } from './tricks/tricks.component';
import { TrickDetailComponent } from './trick-detail/trick-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchedulerComponent } from './scheduler/scheduler.component';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { HeaderComponent } from './header/header.component';
import { EventFormComponent } from './event-form/event-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    HeaderComponent,
    SchedulerComponent,
    TricksComponent,
    TrickDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    GridModule,
    DateInputsModule,
    NgbModule,
    ReactiveFormsModule,
    PopupModule,
    SchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
