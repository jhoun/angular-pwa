import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private backend: BackendService) {}

  allCharacterData: any = [];
  allPlanetData: any[] = [];
  characterNames: any[] = [];
  selectedCharacterInformation: any;
  selectedPlanetInformation: any;

  async ngOnInit() {
    let characterData: any = await this.backend.getFirstCharacterBatch();
    characterData.results.forEach( async (data: any) => {
      this.characterNames.push(data.name);
      if(data.homeworld){
        let homeworldData: any = await this.backend.getAllCharacterBatch(data.homeworld)
        this.allPlanetData.push(homeworldData);
      }
      this.allCharacterData.push(data);
    });

    while (characterData.next) {
      let moreCharacterData: any = await this.backend.getAllCharacterBatch(
        characterData.next
      );
      moreCharacterData.results.forEach( async (data: any) => {
        this.characterNames.push(data.name);
        if(data.homeworld){
          let homeworldData: any = await this.backend.getAllCharacterBatch(data.homeworld)
          this.allPlanetData.push(homeworldData);
        }
        this.allCharacterData.push(data);
      });
      characterData = moreCharacterData;
    }
  }

  onClickedCharacter(event: any) {
    let findCharacter = this.allCharacterData.find((data: any) => {
      return data.name === event.data;
    })
    this.selectedCharacterInformation = findCharacter;
  }

  onClickedPlanet(event: any) {
    let findPlanet = this.allPlanetData.find((data: any) => {
      return data.url === event.data;
    })
    this.selectedPlanetInformation = findPlanet;
  }
}
