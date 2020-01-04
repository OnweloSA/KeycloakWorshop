import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CompaniesListComponent} from './components/companies-list/companies-list.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {ProfilesListComponent} from './components/profiles-list/profiles-list.component';

const appRouter: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: 'companies', component: CompaniesListComponent},
  {path: 'profiles', component: ProfilesListComponent},
  {path: '**', redirectTo: 'companies'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
