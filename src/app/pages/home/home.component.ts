import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.services';
import { Subscription } from 'rxjs';
import { CheckOfflineService } from '../../services/offline.service';

interface Character {
  data?: string,
  name?: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  allCharacterData: Array<string> = [];
  allPlanetData: Array<string>= [];
  allCharacterNames: Array<string> = [];
  selectedCharacterData: Object;

  constructor(
    private backend: BackendService,
    private checkOfflineService: CheckOfflineService
  ) {
    this.subscription = this.checkOfflineService
    .getIsOffline()
    .subscribe(message => {
      localStorage.setItem('allCharacterData', JSON.stringify(this.allCharacterData));
      localStorage.setItem('allCharacterNames', JSON.stringify(this.allCharacterNames));
      localStorage.setItem('allPlanetData', JSON.stringify(this.allPlanetData));
    });
  }

  async ngOnInit(): Promise<void>{
    if (!localStorage.allCharacterData){
      let characterData: any = await this.backend.getFirstCharacterBatch();
      characterData.results.forEach( async (data: any) => {
        this.allCharacterNames.push(data.name);
        this.allCharacterData.push(data);
        let planetData: any = await this.backend.getDynamicPageUrl(data.homeworld)
        this.allPlanetData.push(planetData);
      });

      while (characterData.next) {
        let moreCharacterData: any = await this.backend.getDynamicPageUrl(characterData.next);
        moreCharacterData.results.forEach( async (data: any) => {
          this.allCharacterNames.push(data.name);
          this.allCharacterData.push(data);
          let planetData: any = await this.backend.getDynamicPageUrl(data.homeworld)
          this.allPlanetData.push(planetData);
        });
        characterData = moreCharacterData;
      }
    }
  }

  onClickedCharacter(character: Character): void {
    let allCharacterData = !JSON.parse(localStorage.getItem('allCharacterData'))? this.allCharacterData : JSON.parse(localStorage.getItem('allCharacterData'));
    let findCharacter = allCharacterData
      .find((data: Character) => data.name === character.data);

    this.selectedCharacterData = findCharacter;

    localStorage.setItem('selectedCharacterData', JSON.stringify(this.selectedCharacterData));
  }
}
