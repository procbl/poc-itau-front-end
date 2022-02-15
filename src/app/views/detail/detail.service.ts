
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBusiness } from '../home/home.component';
import { IEndereco } from './detail.component';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  getEmpresa(id:number){ 
    return this.http.get<IBusiness>(`https://60820a0e827b350017cfbaea.mockapi.io/api/v1/itau_teste/${id}`);
  }

  getEndereco(cep){
    return this.http.get<IEndereco>(`https://viacep.com.br/ws/${cep}/json`);
  }

}
