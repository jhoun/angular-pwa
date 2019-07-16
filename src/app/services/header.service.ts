import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable()
export class HeaderService {
  private subject = new Subject<any>();

  addHeaderTitle(title) {
    this.subject.next({ headerTitle: title});
  }

  getHeader(): Observable<any> {
    return this.subject.asObservable();
  }

}