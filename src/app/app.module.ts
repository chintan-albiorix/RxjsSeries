import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { IntervalComponent } from './observable/interval/interval.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservableComponent,
    HomeComponent,
    HeaderComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
