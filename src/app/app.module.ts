import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './components/personal/personal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DialogpersonalComponent } from './components/dialogpersonal/dialogpersonal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatDialogModule} from '@angular/material/dialog';
import { PersonalService } from './services/personal.service';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';





@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    DialogpersonalComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  entryComponents:[DialogpersonalComponent,EditComponent],
  providers: [PersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
