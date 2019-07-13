import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.services';

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
      if(data.homeworld){
        let homeworldData: any = await this.backend.getDynamicPageUrl(data.homeworld)
        this.allPlanetData.push(homeworldData);
      }
      this.allCharacterData.push(data);
    });

    while (characterData.next) {
      let moreCharacterData: any = await this.backend.getDynamicPageUrl(
        characterData.next
      );
      moreCharacterData.results.forEach( async (data: any) => {
        this.allCharacterNames.push(data.name);
        if(data.homeworld){
          let homeworldData: any = await this.backend.getDynamicPageUrl(data.homeworld)
          this.allPlanetData.push(homeworldData);
        }
        this.allCharacterData.push(data);
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
