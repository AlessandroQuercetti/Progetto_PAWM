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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'

//components
import { ProvaComponent } from './prova/prova.component';
import { LoginComponent } from './login/login.component';
import { SezioneTavoliComponent } from './sezione-tavoli/sezione-tavoli.component';
import { HomeComponent } from './home/home.component';
import { SezioneCucinaComponent } from './sezione-cucina/sezione-cucina.component';



@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    LoginComponent,
    SezioneTavoliComponent,
    HomeComponent,
    SezioneCucinaComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
