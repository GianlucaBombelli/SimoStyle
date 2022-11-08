import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { EventoComponent } from './evento/evento.component';
import { PointCardComponent } from './home/point-card/point-card.component';
import { PointCard2Component } from './home/point-card2/point-card2.component';
import { PointCard3Component } from './home/point-card3/point-card3.component';

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
    EventoComponent,
    PointCardComponent,
    PointCard2Component,
    PointCard3Component
  ],
  imports: [BrowserModule,
    RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
export class AppRoutingModule { }
