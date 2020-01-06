import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreservesListComponent } from './components/preserves-list/preserves-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PreservesService } from "./preserves.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PreservesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    PreservesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
