import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CharacterListComponent implements OnInit {
  @Output() onClickCharacter = new EventEmitter<{data: string}>();
  @Input() allCharacterNames: [];
  constructor() { }

  ngOnInit() {
  }

  onClickDetail(event: Event){
    this.onClickCharacter.emit({
      data: (<HTMLInputElement>event.target).innerText
    })
  }
}
