import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { FixedlengthPipe } from './fixedlength.pipe';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginForm2Component } from './login-form2/login-form2.component';
import { NumberSeriesComponent } from './number-series/number-series.component';

const routes : Routes = [
  {path:'',component:PipesDemoComponent},
  {path:'login',component:LoginFormComponent},
  {path:'login2',component:LoginForm2Component},
  {path:'series',component:NumberSeriesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PipesDemoComponent,
    FixedlengthPipe,
    LoginFormComponent,
    LoginForm2Component,
    NumberSeriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
