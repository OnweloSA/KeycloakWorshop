import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreservesListComponent } from './components/preserves-list/preserves-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PreservesService } from "./preserves.service";
import { HttpClientModule } from "@angular/common/http";
import { PreserveDetailsComponent } from './components/preserve-details/preserve-details.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    PreservesListComponent,
    PreserveDetailsComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    PreservesService
  ],
  entryComponents: [
    PreserveDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
