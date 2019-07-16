import { Component, OnInit} from '@angular/core';
import { CheckOfflineService } from '../../services/offline.service';
import { HeaderService } from '../../services/header.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  subscription: Subscription;
  clicked:boolean;

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

  ngOnInit(): void {
    this.title = !localStorage.headerTitle ? 'People' : localStorage.getItem('HeaderTitle');
  }

  onOfflineClick(): void {
    this.clicked = true;
    this.checkOfflineService.toggleOnline(true);
  }

  onBackClick(): void {
    this.headerService.addHeaderTitle('People');
    this.router.navigate(['/']);
  }
}
