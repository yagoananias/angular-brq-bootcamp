import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = 'https://gorest.co.in/public-api/products';
  auth_token : string = '0c966a111d31be9b9ff893213f4e4a2480d2ec5ad74ee217aa362c8771a70b81';

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

  save(product : any){
    this.getHeader()
    return this.http.post(this.url, product, this.getHeader() );
  }

  delete ( id : number ){
    return this.http.delete(`${this.url}/${id}`, this.getHeader() );
  }

  update(id : number, product: any) {
    return this.http.patch(`${this.url}/${id}`, product, this.getHeader() )
  }
}
