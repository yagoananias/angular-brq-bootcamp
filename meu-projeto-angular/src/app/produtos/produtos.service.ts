import { HeaderService } from './../shared/services/header.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = `${environment.API}/products`;

  constructor(private http : HttpClient, private headerService: HeaderService) { }

  getAll() {
    return this.http.get(this.url);
  }

  getOne(id : number) {
    return this.http.get(`${this.url}/${id}`);
  }

  save(product : any){
    return this.http.post(this.url, product, this.headerService.getHeader());
  }

  delete ( id : number ){
    return this.http.delete(`${this.url}/${id}`, this.headerService.getHeader());
  }

  update(id : number, product: any) {
    return this.http.patch(`${this.url}/${id}`, product, this.headerService.getHeader())
  }
}
