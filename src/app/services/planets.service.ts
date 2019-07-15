import { Injectable } from '@angular/core';

@Injectable()
export class PlanetsService {
  planets: any[] = [];

  loadPlanets(planetsArrData: []) {
    this.planets.push(planetsArrData)
  }

  getPlanets(){

    return this.planets;
  }

}