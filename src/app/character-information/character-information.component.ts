import { Component, Input, Output, OnInit , EventEmitter} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.scss']
})
export class CharacterInformationComponent implements OnInit {
  @Input() characterData:string;
  @Input() planetDataArr: [];
  constructor(private router: Router) { }

  ngOnInit() {
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

    const navigationExtras: NavigationExtras = {queryParams: removedPlanetProps};

    this.router.navigate(['/planet'], navigationExtras);
  }

}
