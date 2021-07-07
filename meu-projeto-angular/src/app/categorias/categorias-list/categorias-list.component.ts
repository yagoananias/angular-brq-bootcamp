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
      () => {

        let i = this.categorias.data.findIndex( (x : any) => x.id == id );
        this.categorias.data.splice(i,1);


          //this.getAll()

          // for(let i = 0; i < this.categorias.data.length; i++){

          //   if (this.categorias.data[i].id == id){
          //     this.categorias.data.splice(i,1);
          //   }
          // }
      }
    )
  }

}
