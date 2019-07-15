import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CharacterListComponent implements OnInit {
  @Output() onClickCharacter = new EventEmitter<{data: string}>();
  @Input() characterNamesArr: [];
  selectedCharacter: string;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('allCharacterNames')){
      this.characterNamesArr = JSON.parse(localStorage.getItem('allCharacterNames'));
      this.selectedCharacter = localStorage.getItem('activeSelectCharacter');
    }
  }

  onClickDetail(event: Event, characterName: String){
    this.onClickCharacter.emit({
      data: (<HTMLInputElement>event.target).innerText
    })
    this.selectedCharacter = (<HTMLInputElement>event.target).innerText;
    localStorage.setItem('activeSelectCharacter', this.selectedCharacter )
  }
}
