import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public nome: string;
  public id: string;
  form: FormGroup;
  endereco: FormGroup;
    

  constructor(private route: ActivatedRoute,
    private detailComponent: DetailService,
    private fb: FormBuilder,) { 
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.detailComponent.getEmpresa(Number(this.id)).subscribe(async (res) => {
      this.getEndereco(res.cep);
      this.nome = res.name; 
      this.form = this.fb.group({
        active : [res.active],
        business : [res.business],
        cep : [res.cep],
        cnpj : [res.cnpj],
        name : [res.name],
        valuation : [res.valuation]
      });   
    })   

  }

  teste(){
    console.log(this.form)
    console.log(this.endereco)
  }

  getEndereco(cep){
    if( cep != '' && cep !== null && cep.length > 7){
      this.detailComponent.getEndereco(cep).subscribe((res) => {
        this.endereco = this.fb.group({
          bairro: [res.bairro],
          cep: [res.cep],
          complemento: [res.complemento],
          ddd: [res.ddd],
          gia: [res.gia],
          ibge: [res.ibge],
          localidade: [res.localidade],
          logradouro: [res.logradouro],
          siafi: [res.siafi],
          uf: [res.uf]
        }) 
      })
    } else {
      this.endereco.reset();
    }
  }
}


export interface IEndereco {
    bairro:string; 
    cep:string; 
    complemento:string; 
    ddd:string; 
    gia:string; 
    ibge:string; 
    localidade:string; 
    logradouro:string; 
    siafi:string; 
    uf:string; 
}
