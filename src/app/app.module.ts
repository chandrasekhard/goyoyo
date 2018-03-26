import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { yoyoRootReducer } from './store/store';
import { YoyoEffects } from './effects/yoyo.effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './process/home/home.component';
import { SearchComponent } from './process/search/search.component';
import { HotelListComponent } from './process/hotel-list/hotel-list.component';
import { ViewHotelComponent } from './process/view-hotel/view-hotel.component';
import { YoyoService } from './services/yoyo.service';
import { FilterHotelPipe } from './pipe/filter-hotel.pipe';
import { BookHotelComponent } from './process/book-hotel/book-hotel.component';
import { YoyoGuard } from './guard/yoyo.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    HotelListComponent,
    ViewHotelComponent,
    FilterHotelPipe,
    BookHotelComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, FormsModule, HttpClientModule,
    StoreModule.forRoot({ appState: yoyoRootReducer }), EffectsModule.forRoot([YoyoEffects])
  ],
  providers: [YoyoService,YoyoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
