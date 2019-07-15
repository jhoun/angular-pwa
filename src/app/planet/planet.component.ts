import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planetData:any;

  constructor() {
  }

  ngOnInit() {
    this.planetData = JSON.parse(localStorage.getItem('allPlanetData'));
  }
}
