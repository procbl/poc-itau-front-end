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
  public showView: boolean = false;
  form: FormGroup;
  endereco: FormGroup;


  constructor(private route: ActivatedRoute,
    private detailService: DetailService,
    private fb: FormBuilder,) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let res = this.detailService.mockGetEmpresa();
    this.getEndereco(res.cep);
    this.nome = res.name;
    this.form = this.fb.group({
      active: [res.active],
      business: [res.business],
      cep: [res.cep],
      cnpj: [res.cnpj],
      name: [res.name],
      valuation: [res.valuation],
      data: [new Date()]
    })
    this.showView = true;
    /* //API ESTÁ FORA DO AR
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
    })  */

  }

  getEndereco(cep) {
    if (cep != '' && cep !== null && cep.length > 7) {
      this.detailService.getEndereco(cep).subscribe((res) => {
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
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}
