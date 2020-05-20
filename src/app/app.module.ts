import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GraphComponent } from './graph/graph.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNm7pQfwCRR5qHN8824iQ-BiICHl5gUmI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
