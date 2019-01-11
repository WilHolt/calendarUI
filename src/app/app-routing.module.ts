import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventCalendarComponent} from './event-calendar/event-calendar.component'
import{ DefaultComponent } from './cases/default/default.component'
import{ Case1Component } from './cases/case1/case1.component'
import{ Case2Component } from './cases/case2/case2.component'
import{ Case3Component } from './cases/case3/case3.component'
import{ Case4Component } from './cases/case4/case4.component'
import{ Case6Component } from './cases/case6/case6.component'
import{ Case5Component } from './cases/case5/case5.component'



const routes: Routes = [
  {path:'', component: EventCalendarComponent ,
    children:[
      {path:'default', component: DefaultComponent},
      {path:'case1', component: Case1Component},
      {path:'case2', component: Case2Component},
      {path:'case3', component: Case3Component},
      {path:'case4', component: Case4Component},
      {path:'case5', component: Case5Component},




    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
