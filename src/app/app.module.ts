import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialModule } from './material.module';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';

import { BookReducer } from './store/reducers/book.reducer';
import { BookEffects } from './store/effects/book.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CollectionReducer } from './store/reducers/collection.reducer';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [AppComponent, MainNavComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SearchModule,
    StoreModule.forRoot({ book: BookReducer, collection: CollectionReducer }),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {}
