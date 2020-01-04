import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorMessageComponent} from './components/error-message/error-message.component';
import {CompaniesListComponent} from './components/companies-list/companies-list.component';
import {CompanyDetailsComponent} from './components/company-details/company-details.component';
import {CompaniesService} from './companies.service';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersService} from './users.service';
import {ProfilesListComponent} from './components/profiles-list/profiles-list.component';
import {ProfilesService} from './profiles.service';
import {ProfileDetailsComponent} from './components/profile-details/profile-details.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ApprovalComponent} from './components/approval/approval.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {initializer} from '../keycloak-init';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesListComponent,
    CompanyDetailsComponent,
    UsersListComponent,
    UserDetailsComponent,
    ProfilesListComponent,
    ProfileDetailsComponent,
    ErrorMessageComponent,
    ApprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FontAwesomeModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    CompaniesService,
    UsersService,
    ProfilesService,
    NgbActiveModal
  ],
  entryComponents: [
    CompanyDetailsComponent,
    UserDetailsComponent,
    ProfileDetailsComponent,
    ApprovalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
