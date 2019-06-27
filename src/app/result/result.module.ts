import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ResultComponent } from './result.component';
import { ResultProvider } from './result-provider';

@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ResultProvider],
  exports: [ResultComponent]
})
export class ResultModule { }
