import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { EventoComponent } from './evento/evento.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'contatti', component: ContattiComponent},
  {path:'chi-siamo', component: ChiSiamoComponent},
  {path:'evento', component:EventoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    HomeComponent,
    ContattiComponent,
    ChiSiamoComponent,
    EventoComponent
  ],
  imports: [BrowserModule,
    RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
export class AppRoutingModule { }
