import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendService } from '../services/backend.services';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PeopleListComponent implements OnInit {

  constructor(private backend: BackendService) { }

  characterNames: any[] = [];
  characterDetails: any;

  async ngOnInit() {
    let characterData: any = await this.backend.getFirstCharacterBatch();
    characterData.results.forEach((data: any) => {
      this.characterNames.push(data.name)
    })

    while(characterData.next){
      let moreCharacterData: any = await this.backend.getAllCharacterBatch(characterData.next)
      moreCharacterData.results.forEach((data: any) => {
        this.characterNames.push(data.name)
      })
      characterData = moreCharacterData;
    }
  }

  async onClickDetail(event){
    let characterData = await this.backend.getCharacterDetail(event.target.id);
    this.characterDetails = characterData;
    console.log('this.characterDetails', this.characterDetails);
  }


}
