import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent, 
    FormsModule,
  ],
})
export class AppModule {}
