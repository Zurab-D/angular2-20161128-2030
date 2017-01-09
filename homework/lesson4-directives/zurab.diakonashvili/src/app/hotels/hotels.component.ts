import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Hotel } from '../hotel';
import { data } from '../data/data';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: any[];
  public bigPic: string;

  @Output() onHotelSelect = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    data.forEach((item) => {
      this.hotels.push(
        new Hotel(item.bigPic)
      );
    });
    this.setHotel(0);
  }

  setHotel(id: number) {
    console.log(data[id].bigPicture);

    this.bigPic = '../images/' + data[id].bigPicture;
    this.onHotelSelect.emit(id);
  }
}
