import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {UnitsComponent} from './components/units/units.component';
import {UnitDetailComponent} from './components/unit-detail/unit-detail.component';
import {StoreModule} from '@ngrx/store';
import {unitReducer} from './reducers/unit.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {UnitService} from './services/unit.service';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {UnitEffects} from './effects/unit.effects';
import {NgxSliderModule} from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnitsComponent,
    UnitDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSliderModule,
    EffectsModule.forRoot([UnitEffects]),
    StoreModule.forRoot({units: unitReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [UnitService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
