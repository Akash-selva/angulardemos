import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppStringInterpolationComponent } from './app-string-interpolation/app-string-interpolation.component';
import { AppPropertyBindingComponent } from './app-property-binding/app-property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppStringInterpolationComponent,
    AppPropertyBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
