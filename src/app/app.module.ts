import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrintModule } from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { M1Component } from './m1/m1.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { FloatpopComponent } from './components/floatpop/floatpop.component';
import { M2Component } from './m2/m2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    M1Component,
    TableComponent,
    FloatpopComponent,
    M2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
