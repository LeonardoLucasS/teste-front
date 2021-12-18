import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from '../Models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //SERVER_URL = '/api/';

  constructor(private http: HttpClient) { }

  public getProdutos() : Observable<any>{
    //return this.http.get<Produtos[]>(`${this.SERVER_URL}/Produtos`)
    return this.http.get<Produtos[]>(`/api/Produtos`)
  }
 cadastrarPoduto(produto: Produtos): Observable<any>{
  return this.http.post(`/api/Produtos`, produto)
 }

 atualizarProduto(id:any, produto:Produtos): Observable<any>{
  return this.http.put(`/api/Produtos/`.concat(id), produto)
 }

 removerProduto(id:any){
   return this.http.delete(`/api/Produtos/`.concat(id))
 }
  
}
