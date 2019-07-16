import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

interface HeaderTitle {
  headerTitle: string;
}

@Injectable()
export class HeaderService {
  private subject = new Subject<HeaderTitle>();

  addHeaderTitle(title: string) {
    this.subject.next({ headerTitle: title});
  }

  getHeader(): Observable<HeaderTitle> {
    return this.subject.asObservable();
  }

}