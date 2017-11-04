import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EmergencyDetailsComponent } from './emergency-details/emergency-details.component';
import { AddressComponent } from './personal-details/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    EmergencyDetailsComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
