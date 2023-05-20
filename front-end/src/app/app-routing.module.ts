import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { LoginComponent } from './componenti/login/login.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { ProfileComponent } from './componenti/profile/profile.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { AuthGuard } from './services/auth.guard';
import { SezioneBarComponent } from './componenti/sezione-bar/sezione-bar.component';
import { SezioneCucinaComponent } from './componenti/sezione-cucina/sezione-cucina.component';
import { SezioneTavoliComponent } from './componenti/sezione-tavoli/sezione-tavoli.component';
import { MenuComponent } from './componenti/menu/menu.component';
import { TavoloComponent } from './componenti/tavolo/tavolo.component';
import { MenuElementDialogComponent } from './componenti/menu-element-dialog/menu-element-dialog.component';

const routes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'profile', pathMatch: 'full'},
    { path: 'profile', component: ProfileComponent },
    { path: 'sezione-tavoli', component: SezioneTavoliComponent},
    { path: 'sezione-cucina', component: SezioneCucinaComponent},
    { path: 'sezione-bar', component: SezioneBarComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'registrazione', component: RegistrazioneComponent},
    { path: 'tavolo/:id', component: TavoloComponent},
    { path: 'element', component: MenuElementDialogComponent},
    { path: 'element/:id', component: MenuElementDialogComponent}
  ]},

  { path: 'login', component: LoginComponent},
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: "/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
