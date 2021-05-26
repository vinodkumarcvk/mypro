import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeTableComponent } from './components/prime-table/prime-table.component';
import { MaterialTableComponent } from './components/material-table/material-table.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';


import { TableModule } from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CalendarModule} from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    PrimeTableComponent,
    MaterialTableComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    
    
    TableModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    InputSwitchModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
