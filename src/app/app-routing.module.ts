import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './process/home/home.component';
import { SearchComponent } from './process/search/search.component';
import { ViewHotelComponent } from './process/view-hotel/view-hotel.component';
import { HotelListComponent } from './process/hotel-list/hotel-list.component';
import { BookHotelComponent } from './process/book-hotel/book-hotel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'result',
    component:HotelListComponent
  },
  {
    path:'view',
    component:ViewHotelComponent
  },
  {
    path:'book',
    component:BookHotelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
