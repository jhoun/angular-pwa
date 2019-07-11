import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people-search-bar',
  templateUrl: './people-search-bar.component.html',
  styleUrls: ['./people-search-bar.component.scss']
})
export class PeopleSearchBarComponent implements OnInit {
  @Output() inputKeyUp = new EventEmitter<{name:string}>();
  constructor() { }

  inputObject: {
    input: string;
  } = {
    input: '',
  };

  found: any;

  ngOnInit() {
  }

  sendSearch(){

    this.inputKeyUp.emit({
      name: this.inputObject.input
    })

  }

}
