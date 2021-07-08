import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = `${environment.API}/categories`;
  auth_token : string = environment.auth_token


  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  getOne(id : number) {
    return this.http.get(`${this.url}/${id}`);
  }

  private getHeader() {
    //criando header da requisição
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth_token}`
    })
    return { headers : headers }
  }

  save(categoria : any){
    this.getHeader()
    return this.http.post(this.url, categoria, this.getHeader() );
  }

  delete ( id : number ){
    return this.http.delete(`${this.url}/${id}`, this.getHeader() );
  }

  update(id : number, categoria: any) {
    return this.http.patch(`${this.url}/${id}`, categoria, this.getHeader() )
  }

}
