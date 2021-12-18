import { Component, OnInit } from '@angular/core';
import { Produtos } from '../Models/produtos';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produtos = new Produtos();
  produtos: Array<any> = new Array();

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.listarProdutos();
  }

  atualizar(id: number){
    this.produtosService.atualizarProduto(id, this.produto).subscribe(produto => {
      this.produto = new Produtos();
      this.listarProdutos();
     }, err => { console.log('Erro ao atualizar o produto', err) })
  }

  remover(id:number){
    this.produtosService.removerProduto(id).subscribe(produto => {
      this.produto = new Produtos();
      this.listarProdutos();
     }, err => { console.log('Erro ao atualizar o produto', err) })
  }

  cadastrar() {
    this.produtosService.cadastrarPoduto(this.produto).subscribe(produto => {
      this.produto = new Produtos();
      this.listarProdutos();
     }, err => { console.log('Erro ao cadastrar o produto', err) })
  }

  listarProdutos() {
    this.produtosService.getProdutos().subscribe(produtos => {
      this.produtos = produtos;

    }, err => {
      console.log('Erro ao listar os produtos', err);
    })
  }

}
