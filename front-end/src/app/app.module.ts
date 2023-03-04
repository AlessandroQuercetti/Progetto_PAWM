import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms'; //vedi se mettere anche FormsModule

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

//components
import { LoginComponent } from './login/login.component';
import { SezioneTavoliComponent } from './sezione-tavoli/sezione-tavoli.component';
import { HomeComponent } from './home/home.component';
import { SezioneCucinaComponent } from './sezione-cucina/sezione-cucina.component';
import { SezioneBarComponent } from './sezione-bar/sezione-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SezioneTavoliComponent,
    HomeComponent,
    SezioneCucinaComponent,
    SezioneBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
