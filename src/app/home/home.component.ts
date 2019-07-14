import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.services';
import { getHomeWorld } from '../utility-function';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private backend: BackendService) {}

  allCharacterData: Object[] = [];
  allPlanetData: Object[] = [];
  allCharacterNames: string[] = [];
  selectedCharacterData: Object;

  async ngOnInit() {
    let characterData: any = await this.backend.getFirstCharacterBatch();
    characterData.results.forEach( async (data: any) => {
      this.allCharacterNames.push(data.name);
      this.allCharacterData.push(data);
      getHomeWorld(data, this.allPlanetData, this.backend);
    });

    while (characterData.next) {
      let moreCharacterData: any = await this.backend.getDynamicPageUrl(characterData.next);
      moreCharacterData.results.forEach( async (data: any) => {
        this.allCharacterNames.push(data.name);
        this.allCharacterData.push(data);
        getHomeWorld(data, this.allPlanetData, this.backend);
      });
      characterData = moreCharacterData;
    }
  }

  onClickedCharacter(event: any) {
    let findCharacter = this.allCharacterData
      .find((data: any) => data.name === event.data);

    this.selectedCharacterData = findCharacter;
  }
}
