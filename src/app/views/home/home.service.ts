import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBusiness } from './home.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  /*  getEmpresas: Observable<IBusiness>(){
     return this.http.get<Observable<IBusiness>>('https://60820a0e827b350017cfbaea.mockapi.io/api/v1/itau_teste');
   } */

  getEmpresas(): Observable<any> {
    return this.http.get<IBusiness[]>('https://60820a0e827b350017cfbaea.mockapi.io/api/v1/itau_teste');
  }

  getValidaSms(): Observable<any> {
    return this.http.get<any>('https://demo5526562.mockable.io/valida-sms');
  }

  getCriaConta(): Observable<any> {
    return this.http.get<any>('https://demo5526562.mockable.io/criarConta');
  }

  /* public assinar(pin: string): Observable<any> {
    return this.omniAbreContaRestService.post('accounts/eletronic-signature', {
      pin,
    });
  } */

  mockGetEmpresas(): IBusiness[] {
    return [{
      id: 1,
      active: true,
      business: "Financial Center",
      cep: "04538132",
      cnpj: 17298092000130,
      name: "Itaú BBA",
      valuation: 850000000.50
    },
    {
      id: 2,
      active: true,
      business: "Financial Center",
      cep: "04538132",
      cnpj: 17298092000130,
      name: "Itaú BBA",
      valuation: 850000000.50
    },
    {
      id: 3,
      active: true,
      business: "Financial Center",
      cep: "04538132",
      cnpj: 17298092000130,
      name: "Itaú BBA",
      valuation: 850000000.50
    }]
  }

}
