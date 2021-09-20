import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnitDetailComponent} from './components/unit-detail/unit-detail.component';
import {UnitsComponent} from './components/units/units.component';
import {HomeComponent} from './components/home/home.component';

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
