import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { SezioneBarComponent } from './sezione-bar/sezione-bar.component';
import { SezioneCucinaComponent } from './sezione-cucina/sezione-cucina.component';
import { SezioneTavoliComponent } from './sezione-tavoli/sezione-tavoli.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: ''}, //non va bene app, vedi bene questo
  //{ path: "home", component: HomeComponent, canActivate: [AuthGuard] },// se metto home va lo stesso su profile
  { path: 'login', component: LoginComponent},

  //navbar
  { path: "profile", component: ProfileComponent},
  { path: 'sezione-tavoli', component: SezioneTavoliComponent},
  { path: 'sezione-tavoli/:id', component: SezioneTavoliComponent},
  { path: 'sezione-cucina', component: SezioneCucinaComponent},
  { path: 'sezione-bar', component: SezioneBarComponent},

  /* se vuoi fare cosi vedi il video numero 25
  { path: 'home', component: HomeComponent, children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'sezione-tavoli', component: SezioneTavoliComponent},
    { path: 'sezione-tavoli/:id', component: SezioneTavoliComponent},
    { path: 'sezione-cucina', component: SezioneCucinaComponent},
    { path: 'sezione-bar', component: SezioneBarComponent}
  ]}*/

  //altri
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: "/404"} //qualsiasi path che non e tra quelli sopra viene reindirizzato al 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
