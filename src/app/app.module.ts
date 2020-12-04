import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InformacionxComponent } from './componentes/informacionx/informacionx.component';
import { AgendabmwComponent } from './componentes/agendabmw/agendabmw.component';
import { CotizabmwComponent } from './componentes/cotizabmw/cotizabmw.component';
import { ServicioclienteComponent } from './componentes/serviciocliente/serviciocliente.component';
import { RedoficialComponent } from './componentes/redoficial/redoficial.component';
import { VisioncarsComponent } from './componentes/visioncars/visioncars.component';
import { AccesoriosComponent } from './componentes/accesorios/accesorios.component';


const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'informacionx',component:InformacionxComponent},
  {path: 'agendabmw',component:AgendabmwComponent},
  {path: 'cotizabmw',component:CotizabmwComponent},
  {path: 'serviciocliente',component:ServicioclienteComponent},
  {path: 'redoficial',component:RedoficialComponent},
  {path:'visioncars',component:VisioncarsComponent},
  {path: 'accesorios',component:AccesoriosComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InformacionxComponent,
    AgendabmwComponent,
    CotizabmwComponent,
    ServicioclienteComponent,
    RedoficialComponent,
    VisioncarsComponent,
    AccesoriosComponent
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
