import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PeopleListComponent implements OnInit {

  constructor() { }

  characterNames: any;

  ngOnInit() {
    this.characterNames = ['Luke', 'Sunday', 'Han', 'Jack', 'Darth Vader']
  }

  onClickDetail(inputData: {name: string}){
    console.log('inputData', inputData);
  }


}
