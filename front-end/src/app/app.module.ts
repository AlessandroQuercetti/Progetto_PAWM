import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './componenti/login/login.component';
import { SezioneTavoliComponent } from './componenti/sezione-tavoli/sezione-tavoli.component';
import { HomeComponent } from './componenti/home/home.component';
import { SezioneCucinaComponent } from './componenti/sezione-cucina/sezione-cucina.component';
import { SezioneBarComponent } from './componenti/sezione-bar/sezione-bar.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { AddTableDialogComponent } from './componenti/add-table-dialog/add-table-dialog.component';
import { ProfileComponent } from './componenti/profile/profile.component';
import { MenuElementDialogComponent } from './componenti/menu-element-dialog/menu-element-dialog.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { MenuComponent } from './componenti/menu/menu.component';
import { TavoloComponent } from './componenti/tavolo/tavolo.component';
import { ComandaDialogComponent } from './componenti/comanda-dialog/comanda-dialog.component';
import { TokenInterceptor } from './services/token.interceptor';

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
    ProfileComponent,
    MenuElementDialogComponent,
    RegistrazioneComponent,
    MenuComponent,
    TavoloComponent,
    ComandaDialogComponent

  ],
  //entryComponents: [AddTableDialogComponent], //vedi bene se serve, non lo so
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule, //per gestire form lato typescript
    FormsModule, //per gestire form lato template
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatTabsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
