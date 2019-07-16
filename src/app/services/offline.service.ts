import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

interface IsOffline {
  isOffline: boolean;
}

@Injectable()
export class CheckOfflineService {
  private subject = new Subject<IsOffline>();

  toggleOnline(boolean: boolean) {
    this.subject.next({ isOffline: boolean});
  }

  getIsOffline(): Observable<IsOffline> {
    return this.subject.asObservable();
  }
}