import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.scss']
})
export class CharacterInformationComponent implements OnInit {
  @Input() getClickedEventData:string;
  constructor() { }

  ngOnInit() {
  }

}
