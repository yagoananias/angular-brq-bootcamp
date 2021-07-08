import { CategoriasService } from './../../categorias/categorias.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  meuForm : FormGroup | any;
  categorias : any = null;

  constructor(private formBuilder : FormBuilder,
    private produtosService : ProdutosService,
    private categoriasService : CategoriasService) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllCategorias();
  }

  private getAllCategorias() {
    this.categoriasService.getAll().subscribe(
      (data) => {
        this.categorias = data;
      }
    )
  }

  private createForm() {
    this.meuForm = this.formBuilder.group(
      {
        name : [null, []],
        price : [null, []],
        status : [null, []],
        categories : [null, []],
      }
    )
  }

  public onSubmit(){}

}
