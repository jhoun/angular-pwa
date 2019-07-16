import { Component, OnInit } from '@angular/core';

interface PlanetData {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
}

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planetData: PlanetData;

  constructor() {
  }

  ngOnInit() {
    this.planetData = JSON.parse(localStorage.getItem('selectedPlanetData'));
  }
}
