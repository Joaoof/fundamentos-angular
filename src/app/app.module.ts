import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.compenent';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicarPorPipe } from './multiplicar-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicarPorPipe,
    PipeCustomizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
