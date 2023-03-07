import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SezioneBarComponent } from './sezione-bar/sezione-bar.component';
import { SezioneCucinaComponent } from './sezione-cucina/sezione-cucina.component';
import { SezioneTavoliComponent } from './sezione-tavoli/sezione-tavoli.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home'},
  { path: "home", component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sezione-tavoli', component: SezioneTavoliComponent},
  { path: 'sezione-cucina', component: SezioneCucinaComponent},
  { path: 'sezione-bar', component: SezioneBarComponent},

  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: "/404"} //qualsiasi path che non e tra quelli sopra viene reindirizzato al 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
