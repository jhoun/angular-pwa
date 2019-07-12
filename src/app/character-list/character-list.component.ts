import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendService } from '../services/backend.services';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CharacterListComponent implements OnInit {

  constructor(private backend: BackendService) { }

  allCharacterData: any = [];
  characterNames: any[] = [];
  selectedCharacterInformation: any;

  async ngOnInit() {
    let characterData: any = await this.backend.getFirstCharacterBatch();
    characterData.results.forEach((data: any) => {
      this.allCharacterData.push(data);
      this.characterNames.push(data.name)
    })

    while(characterData.next){
      let moreCharacterData: any = await this.backend.getAllCharacterBatch(characterData.next)
      moreCharacterData.results.forEach((data: any) => {
        this.allCharacterData.push(data);
        this.characterNames.push(data.name)
      })
      characterData = moreCharacterData;
    }
  }

  async onClickDetail(event: Event){
    let findCharacter = this.allCharacterData.find((data: any) => {
      return data.name === (<HTMLInputElement>event.target).innerText;
    })
    this.selectedCharacterInformation = findCharacter;
  }


}
