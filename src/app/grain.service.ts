import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrainService {

  constructor(private httpClient: HttpClient) { }

  public getEmployees() {
    return this.httpClient.get('http://localhost/seeds');
  }

}
