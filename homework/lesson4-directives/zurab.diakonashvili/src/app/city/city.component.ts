import { Component, OnInit, Input } from '@angular/core';
//import { rand } from '../lib/rand';
import { data } from '../data/data';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  public followers: number;
  public following: number;
  public imageCity: string;
  public imageCityArr: string[] = ['b1.jpg', 'b2.jpg', 'b3.jpg'];

  @Input() set hotelSelect(id: number) {
    console.log(`city.hotelSelect(${id})`);

    this.followers = data[id].city.followers;
    this.following = data[id].city.following;
    this.imageCity = '../images/' + data[id].city.imageCity;
  }

  constructor() { }

  ngOnInit() {
    //this.randomizeCity();
  }

  /*randomizeCity(): void {
    setInterval(() => {
      this.followers = rand(1000, 20000);
      this.following = rand(1000, 20000);
      this.imageCity = '../images/' + this.imageCityArr[rand(2)];
    }, 3000)
  }*/

}
