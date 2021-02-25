import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StrucDirectDemoComponent } from './struc-direct-demo/struc-direct-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StrucDirectDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
