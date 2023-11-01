import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CircularChartComponent } from './components/circular-chart/circular-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LandingComponent, CircularChartComponent],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
