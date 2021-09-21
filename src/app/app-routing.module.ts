import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {UnitsComponent} from './containers/units/units.component';
import {UnitDetailComponent} from './containers/unit-detail/unit-detail.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'units', component: UnitsComponent},
  {path: 'units/:id', component: UnitDetailComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
