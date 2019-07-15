import { Component, OnInit} from '@angular/core';

import { CheckOfflineService } from '../services/offline.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor (private checkOfflineService: CheckOfflineService) { }

  isClicked = true
  ngOnInit() {
  }

  onOfflineClick(){
    this.checkOfflineService.toggleOnline(!this.isClicked);
    this.isClicked = !this.isClicked;
  }
}
