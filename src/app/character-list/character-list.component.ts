import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BackendService } from '../services/backend.services';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CharacterListComponent implements OnInit {
  @Output() onClickCharacter = new EventEmitter<{data: string}>();
  @Input() allCharacterNames: [];
  constructor(private backend: BackendService) { }

  ngOnInit() {
  }

  onClickDetail(event: Event){
    this.onClickCharacter.emit({
      data: (<HTMLInputElement>event.target).innerText
    })
  }
}
