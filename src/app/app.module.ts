import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { from } from 'rxjs';
import { DefaultComponent } from './cases/default/default.component';
import { Case1Component } from './cases/case1/case1.component';
import { Case2Component } from './cases/case2/case2.component';
import { Case3Component } from './cases/case3/case3.component';
import { Case4Component } from './cases/case4/case4.component';
import { Case5Component } from './cases/case5/case5.component';
import { Case6Component } from './cases/case6/case6.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EventCalendarComponent,
    DefaultComponent,
    Case1Component,
    Case2Component,
    Case3Component,
    Case4Component,
    Case5Component,
    Case6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
