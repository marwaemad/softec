
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule ,JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { weatherListService } from './weather/weather.service';
import { weatherListComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    weatherListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule

  ],
  providers: [
    weatherListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
