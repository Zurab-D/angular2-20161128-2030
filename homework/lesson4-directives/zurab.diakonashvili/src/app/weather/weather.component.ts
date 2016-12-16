import { Component, OnInit, Input } from '@angular/core';
import { rand } from '../lib/rand';
import { data } from '../data/data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    public cloudClass: string;
    public airDegree: number;
    public waterDegree: number;
    private timer: NodeJS.Timer;

    public cloudStylesArr: string[] = ['cloud', 'cloud1', 'cloud2', 'cloud3', 'cloud4', 'cloud5', 'cloud6']

    constructor() { }

    ngOnInit() {
        this.randomizeCloudClass();
    }

    randomizeCloudClass(): void {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setInterval(() => {
            let maxCloudArr = this.cloudStylesArr.length;
            let randCloud = rand(0, maxCloudArr);
            this.cloudClass = this.cloudStylesArr[randCloud];
            this.airDegree = rand(0, 30);
            this.waterDegree = rand(0, 30);
        }, 3000);
    }

  @Input() set hotelSelect(id: number) {
    console.log(`weather.hotelSelect(${id})`);

    this.cloudClass = data['hotel' + id].weather.cloud;
    this.airDegree = data['hotel' + id].weather.airDegree;
    this.waterDegree = data['hotel' + id].weather.waterDegree;

    this.randomizeCloudClass();
  }
}
