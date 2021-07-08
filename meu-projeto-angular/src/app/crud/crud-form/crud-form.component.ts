import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  meuForm : FormGroup | any;
  isEdicao : boolean = false;
  id : number;

  constructor(private formBuilder : FormBuilder,
    private crudService : CrudService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.meuForm =this.formBuilder.group(
      {
        name : [ null, [Validators.required] ],
        email : [ null, [Validators.required, Validators.email] ],
        gender : [ null, [Validators.required] ],
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
          this.crudService.getOne(this.id).subscribe(
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
      this.crudService.update( this.id, this.meuForm.value ).subscribe(
        (data) => {
          this.router.navigate(['crud/crud-list'])
        }
      )

    } else {
      this.crudService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data)
          this.meuForm.reset();
          this.router.navigate(['crud/crud-list'])
        }
      );

    }

  }

}
