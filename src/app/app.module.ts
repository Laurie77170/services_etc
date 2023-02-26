import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaurieComponent } from './laurie/laurie.component';
import { SandraComponent } from './sandra/sandra.component';

@NgModule({
  declarations: [
    AppComponent,
    LaurieComponent,
    SandraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
