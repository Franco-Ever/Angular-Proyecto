import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InformacionxComponent } from './componentes/informacionx/informacionx.component';


const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'informacionx',component:InformacionxComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InformacionxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
