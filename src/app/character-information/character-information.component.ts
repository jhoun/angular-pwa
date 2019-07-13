import { Component, Input, Output, OnInit , EventEmitter} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.scss']
})
export class CharacterInformationComponent implements OnInit {
  @Input() getClickedEventData:string;
  @Input() getAllPlanetInformation: [];
  constructor(private router: Router) { }

  getSelectedPlanet:any;
  ngOnInit() {
  }

  getHomeworld(event: Event){
    let findPlanet = this.getAllPlanetInformation.find((data: any) => {
      return data.url === (<HTMLInputElement>event.target).className;
    })

    this.getSelectedPlanet = findPlanet;

    const navigationExtras: NavigationExtras = {queryParams: findPlanet};
    this.router.navigate(['/planet'], navigationExtras);
  }

}
