import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:PromiseComponent},
  {path:'promise', component:PromiseComponent},
  {path:'observable', component:ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
