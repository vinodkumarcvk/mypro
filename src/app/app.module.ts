import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeTableComponent } from './components/prime-table/prime-table.component';
import { MaterialTableComponent } from './components/material-table/material-table.component';
import { MaterialViewComponent } from './components/material-view/material-view.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 





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
import { PrimeGridComponent } from './components/prime-grid/prime-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeTableComponent,
    MaterialTableComponent,
    RegistrationComponent,
    PrimeGridComponent,
    MaterialViewComponent
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
    MatBadgeModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTooltipModule,





    
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
