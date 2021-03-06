import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getFirstCharacterBatch(): Promise<object> {
    return this.http.get('https://swapi.co/api/people').toPromise();
  }

  getDynamicPageUrl(pageURL: string): Promise<object> {
    return this.http.get(`${pageURL}`).toPromise();
  }
}
