import { Component } from '@angular/core';
import { hotel } from './hotel';
// import { data } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hot Weather Widget';
  selectedHotelId: number = 0;

  /*constructor() {
    data.forEach
  }*/

  hotelSelect(id) {
    this.selectedHotelId = id;
    // console.log(`app.hotelSelect(${id})`);
  }
}
