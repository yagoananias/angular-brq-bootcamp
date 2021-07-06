import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {

  meuForm : FormGroup | any;
  isEdicao : boolean = false;
  id : number;

  constructor(private formBuilder : FormBuilder,
    private categoriasService : CategoriasService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group(
      {
        name : [ null, [Validators.required] ],
        description : [ null, [Validators.required, Validators.email] ],
        status : [ null, [Validators.required] ]
      }
    );

    this.activatedRoute.params.subscribe(
      (param) => {
        console.log(param)

        //é edição
        if(param.id) {
          this.isEdicao = true;
          this.id = param.id;
          this.categoriasService.getOne(this.id).subscribe(
            (resp : any) => {
              console.log(resp);
              this.meuForm.patchValue(resp.data)
            }
          )
          //criação
        } else {
          this.isEdicao = false;
        }
      }
    )
  }

  onSubmit(){
    console.log(this.meuForm);

    if(this.isEdicao) {
      this.categoriasService.update( this.id, this.meuForm.value ).subscribe(
        (data) => {
          this.router.navigate(['/categorias-list'])
        }
      )

    } else {
      this.categoriasService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data)
          this.meuForm.reset();
          this.router.navigate(['/categorias-list'])
        }
      );

    }

  }

}
