import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {

  categorias : any = null;

  constructor(private categoriasService : CategoriasService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.categoriasService.getAll().subscribe(
      (data) => {
        this.categorias = data;
      }
    );
  }

  onDelete(id : number) {
    this.categoriasService.delete( id ).subscribe(
      (data) => {
        this.getAll();
      }
    )
  }

}
