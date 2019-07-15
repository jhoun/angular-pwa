import { Component, OnInit} from '@angular/core';
import { CheckOfflineService } from '../services/offline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor (
    private checkOfflineService: CheckOfflineService,
    private router: Router
  ) {}

  isClicked = true


  ngOnInit() {
  }

  onOfflineClick(){
    this.checkOfflineService.toggleOnline(!this.isClicked);
    this.isClicked = !this.isClicked;
  }
}
