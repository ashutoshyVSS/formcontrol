import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ChildComponent } from './reactiveform/child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
