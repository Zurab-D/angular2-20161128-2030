import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { data } from '../data/data';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public bigPic: string;

  @Output() onHotelSelect = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.setHotel(0);
  }

  setHotel(id: number) {
    console.log(data[id].bigPicture);
    this.bigPic = '../images/' + data[id].bigPicture;
    this.onHotelSelect.emit(id);
  }
}
