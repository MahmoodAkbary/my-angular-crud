import { S } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { associtatModel } from '../../model/associate';

@Injectable({
  providedIn: 'root',
})
export class Associate {
  apiBaseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  Getall() {
    return this.http.get<associtatModel[]>(this.apiBaseUrl + '/associate');
  }
  Get(id: number) {
    return this.http.get<associtatModel>(this.apiBaseUrl + '/associate' + id);
  }

  Delete(id: number) {
    return this.http.delete(this.apiBaseUrl + '/associate' + id);
  }

  Update(data: associtatModel) {
    return this.http.put(this.apiBaseUrl + '/associate' + data.id, data);
  }
  Create(data: associtatModel) {
    return this.http.post(this.apiBaseUrl + '/associate', data);
  }
}
