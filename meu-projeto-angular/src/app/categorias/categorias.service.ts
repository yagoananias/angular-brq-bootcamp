import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = 'https://gorest.co.in/public-api/categories';
  auth_token : string = '0c966a111d31be9b9ff893213f4e4a2480d2ec5ad74ee217aa362c8771a70b81';


  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

}