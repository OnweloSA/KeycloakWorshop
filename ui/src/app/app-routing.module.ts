import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreservesListComponent } from "./components/preserves-list/preserves-list.component";


const appRouter: Routes = [
  {path: 'racks', component: PreservesListComponent},
  {path: '**', redirectTo: 'racks'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
