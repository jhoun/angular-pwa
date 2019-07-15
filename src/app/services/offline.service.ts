import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable()
export class CheckOfflineService {
  private subject = new Subject<any>();

  toggleOnline(boolean: Boolean) {
    this.subject.next({ isOffline: boolean});
  }

  getIsOffline(): Observable<any> {
    return this.subject.asObservable();
  }
}