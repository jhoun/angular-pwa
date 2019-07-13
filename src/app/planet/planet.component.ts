import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planetData:any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.planetData = this.route.snapshot.queryParams
  }
}
