import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { EventsComponent } from './events/events.component';
import { ChildComponent } from './components/child/child.component';
import { NgContentExampleComponent } from './ng-content-example/ng-content-example.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CutTextPipe,
    EventsComponent,
    ChildComponent,
    NgContentExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
