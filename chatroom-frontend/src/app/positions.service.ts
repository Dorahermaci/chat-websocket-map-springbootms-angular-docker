// position.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  private apiEndpoint = 'http://localhost:3000/positions';

  constructor(private http: HttpClient) { }

  getPositions(): Observable<any> {
    return this.http.get(this.apiEndpoint);
  }
}
