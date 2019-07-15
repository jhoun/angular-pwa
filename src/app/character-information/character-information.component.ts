import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CheckOfflineService } from '../services/offline.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.scss']
})
export class CharacterInformationComponent implements OnInit{
  @Input() characterData:string;
  @Input() planetDataArr: [];

  isOffline: Boolean;
  subscription: Subscription;
  constructor(
    private router: Router,
    private checkOfflineService: CheckOfflineService,
    private headerService: HeaderService
  ) {
    this.subscription = this.checkOfflineService
      .getIsOffline()
      .subscribe(message => {
        this.isOffline= message.isOffline;
      });
   }

  ngOnInit() {
    this.characterData = JSON.parse(localStorage.getItem('selectedCharacterData'));
  }

  getSelectedPlanetData(event: Event){
    const findPlanet = this.planetDataArr.find((data: any) => {
      return data.url === (<HTMLInputElement>event.target).className;
    })

    const planetPropsToRemove = ['edited', 'created', 'films', 'residents', 'url'];

    const removedPlanetProps = Object.keys(findPlanet)
      .filter(prop => !planetPropsToRemove.includes(prop))
      .map(prop => Object.assign({}, {[prop]: findPlanet[prop]}))
      .reduce((obj, curr) => Object.assign(obj, curr), {});

      localStorage.setItem('allPlanetData', JSON.stringify(removedPlanetProps));

      this.headerService.addHeaderTitle('Planet');
      this.router.navigate(['/planet']);
  }

}
