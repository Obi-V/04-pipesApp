
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Configuración del locale de la app
import localeEsHN from '@angular/common/locales/es-HN'
import localeEs from '@angular/common/locales/es'
import localeFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';

registerLocaleData( localeFrCA )
registerLocaleData( localeEs )
registerLocaleData( localeEsHN )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
