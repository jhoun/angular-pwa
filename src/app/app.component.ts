import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { BackendService } from './services/backend.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'angular-pwa';

  constructor(private backend: BackendService) {}

  allCharacterData: any = [];
  characterNames: any[] = [];
  selectedCharacterInformation: any;

  async ngOnInit() {
    let characterData: any = await this.backend.getFirstCharacterBatch();
    characterData.results.forEach((data: any) => {
      this.allCharacterData.push(data);
      this.characterNames.push(data.name);
    });

    while (characterData.next) {
      let moreCharacterData: any = await this.backend.getAllCharacterBatch(
        characterData.next
      );
      moreCharacterData.results.forEach((data: any) => {
        this.allCharacterData.push(data);
        this.characterNames.push(data.name);
      });
      characterData = moreCharacterData;
    }
  }

  onClickedCharacter(event: Event) {
    let findCharacter = this.allCharacterData.find((data: any) => {
      return data.name === event.data;
    })
    this.selectedCharacterInformation = findCharacter;
  }
}
