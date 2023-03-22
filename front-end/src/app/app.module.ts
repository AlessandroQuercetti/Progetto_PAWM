import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { LoginComponent } from './login/login.component';
import { SezioneTavoliComponent } from './sezione-tavoli/sezione-tavoli.component';
import { HomeComponent } from './home/home.component';
import { SezioneCucinaComponent } from './sezione-cucina/sezione-cucina.component';
import { SezioneBarComponent } from './sezione-bar/sezione-bar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddTableDialogComponent } from './add-table-dialog/add-table-dialog.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SezioneTavoliComponent,
    HomeComponent,
    SezioneCucinaComponent,
    SezioneBarComponent,
    NotfoundComponent,
    AddTableDialogComponent,
    ProfileComponent

  ],
  //entryComponents: [AddTableDialogComponent], //vedi bene se serve, non lo so
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule, //per gestire form lato typescript
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule //per gestire form lato template
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
