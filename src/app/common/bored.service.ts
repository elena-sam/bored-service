import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoredService {
  constructor(private service: HttpClient) { }

  getActivity(): Observable<any> {
    return this.service.get<any>('/api/activity');
  }
}

