import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeTableComponent } from './components/prime-table/prime-table.component';
import { MaterialTableComponent } from './components/material-table/material-table.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

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
import {KnobModule} from 'primeng/knob';
import {SliderModule} from 'primeng/slider';
import {RatingModule} from 'primeng/rating';
import {SplitterModule} from 'primeng/splitter';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {BadgeModule} from 'primeng/badge';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

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
    HttpClientModule,
    
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
 
    
    
    TableModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    InputSwitchModule,
    KnobModule,
    SliderModule,
    RatingModule,
    SplitterModule,
    DialogModule,
    FileUploadModule,
    BadgeModule,
    ProgressBarModule,
    ProgressSpinnerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
