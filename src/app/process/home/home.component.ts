import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'yoyo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
   }

  ngOnInit() {
  }

  searchHotel(){
    console.log('search button clicked...');
    this.router.navigate(['/search']);
  }
}
