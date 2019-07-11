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

  onClickAdded(inputData: {name: string}){
    console.log('inputData', inputData);

    if (!this.characterNames.length){
      this.characterNames = ['Luke', 'Sunday', 'Han', 'Jack', 'Darth Vader'];
    }

    if(inputData.name.length){
      let filter = this.characterNames.filter((character: string) => {
        return character.toLowerCase().includes(inputData.name);
      })
      this.characterNames = filter;
    } else {
      this.characterNames = ['Luke', 'Sunday', 'Han', 'Jack', 'Darth Vader']
    }

    console.log('this.characterNames', this.characterNames);
  }


}
