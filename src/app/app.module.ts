import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AllMaterialModule } from './material';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberOnlyDirective } from './number-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    NumberOnlyDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AllMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
