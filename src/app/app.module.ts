import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule,MatToolbarModule,MatCheckboxModule,MatGridListModule,
  MatDatepickerModule,MatNativeDateModule,MatTableModule,MatInputModule,MatIconModule} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CalenderComponent } from './calender/calender.component';
import { DatastoreComponent } from './datastore/datastore.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    DatastoreComponent,
    TableComponent
  ],
  imports: [
    MatDatepickerModule,
    MatToolbarModule,
    MatGridListModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatNativeDateModule,
    MatTableModule,
    MatInputModule,
    MatIconModule
  ],
  exports : [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
