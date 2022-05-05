import { IntervalComponent } from './observable/interval/interval.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'promise', component:PromiseComponent},
  {path:'observable', component:ObservableComponent, children:[
    {path:'', component:ListComponent},
    {path:'fromEvent', component:FromEventComponent},
    {path:'interval', component:IntervalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
