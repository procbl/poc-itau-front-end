import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBusiness } from './home.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getEmpresas(){ 
    return this.http.get<IBusiness[]>('https://60820a0e827b350017cfbaea.mockapi.io/api/v1/itau_teste');
  }

  mockGetEmpresas(): IBusiness[]{
    return [{
       id: 1,
       active : true,
       business : "Financial Center",
       cep : "04538132",
       cnpj : 17298092000130,
       name : "Itaú BBA",
       valuation : 850000000.50}]
   }

}
