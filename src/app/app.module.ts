import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';
import { ResultModule } from './result/result.module';
import { AppVariables } from './app.variables';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    ResultModule
  ],
  providers: [AppVariables],
  bootstrap: [AppComponent]
})
export class AppModule { }
