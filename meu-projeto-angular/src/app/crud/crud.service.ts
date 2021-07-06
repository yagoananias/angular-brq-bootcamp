import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiUrl = 'https://gorest.co.in/public-api/users';

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl);
  }
}
