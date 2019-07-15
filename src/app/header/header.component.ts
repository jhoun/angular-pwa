import { Component, OnInit} from '@angular/core';
import { CheckOfflineService } from '../services/offline.service';
import { HeaderService } from '../services/header.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isClicked = true
  title:String;
  subscription: Subscription;

  constructor (
    private checkOfflineService: CheckOfflineService,
    private headerService: HeaderService,
    private router: Router
  ) {
    this.subscription = this.headerService
      .getHeader()
      .subscribe(message => {
        localStorage.setItem('HeaderTitle', message.headerTitle);
        this.title= message.headerTitle;
      });
  }

  ngOnInit() {
    this.title = localStorage.getItem('HeaderTitle');
  }

  onOfflineClick(){
    this.checkOfflineService.toggleOnline(!this.isClicked);
    this.isClicked = !this.isClicked;
  }

  onBackClick(){
    this.headerService.addHeaderTitle('People');
    this.router.navigate(['/']);
  }
}
