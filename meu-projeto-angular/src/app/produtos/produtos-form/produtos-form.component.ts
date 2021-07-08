import { CategoriasService } from './../../categorias/categorias.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutosService } from '../produtos.service';
import { ProdutoCategoriaService } from '../produto-categoria.service';

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
    private categoriasService : CategoriasService,
    private produtoCategoriaService : ProdutoCategoriaService) { }

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
        name : [null, [Validators.required]],
        price : [null, [Validators.required]],
        status : [null, [Validators.required]],
        description : [null, [Validators.required]],
        image : [null, [Validators.required]],
        categories : [null, [Validators.required]],
      }
    )
  }

  public onSubmit(){
    this.produtosService.save(this.meuForm.value).subscribe(
      (response : any) => {
        let produto_id = response.data.id;
        let categoria_id = this.meuForm.get('categories').value;
        console.log (produto_id, categoria_id)

        this.produtoCategoriaService.save(produto_id, categoria_id).subscribe(
          () => {
            console.log("Salvou produto-categoria com sucesso");
          }
        )
      }
    )
  }
}
