import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hot Weather Widget';
  selectedHotelId: number = 1;

  hotelSelect(id) {
    this.selectedHotelId = id;
    console.log(`app.hotelSelect(${id})`);
  }
}
