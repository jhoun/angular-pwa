import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CharacterListComponent implements OnInit {
  @Output() onClickCharacter = new EventEmitter<{ data: string }>();
  @Input() characterNamesArr: Array<string>;
  selectedCharacter: string;
  searchText: string;

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem("allCharacterNames")) {
      this.characterNamesArr = JSON.parse(
        localStorage.getItem("allCharacterNames")
      );
      this.selectedCharacter = localStorage.getItem("activeSelectCharacter");
    }
  }

  onClickDetail(event: Event): void {
    this.onClickCharacter.emit({
      data: (<HTMLInputElement>event.target).innerText
    });
    this.selectedCharacter = (<HTMLInputElement>event.target).innerText;
    localStorage.setItem("activeSelectCharacter", this.selectedCharacter);
  }
}
