import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  produtos : any = null;

  constructor(private produtosService : ProdutosService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.produtosService.getAll().subscribe(
      (data) => {
        this.produtos = data;
      }
    );
  }

  onDelete(id : number) {
    this.produtosService.delete( id ).subscribe(
      (data) => {
        this.getAll();
      }
    )
  }

}
