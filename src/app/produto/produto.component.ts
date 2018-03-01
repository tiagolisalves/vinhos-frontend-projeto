import { Component } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls : ['./produto.component.css']
})
export class ProdutoComponent {
    produto: Produto;
    mostra: Boolean;
    produtos: Array<Produto> = new Array();
    constructor() {
       this.produto = new Produto();
    }
    logar(produto: Produto) {
        console.log(produto);
    }
    mostraDeVezEmQuando() {
        this.mostra = !this.mostra;
    }
    verificaProduto(produto: Produto): Boolean {
        return produto.nome != null && produto.valor != null;
    }
    adicionarProduto(produto: Produto) {
        if (this.verificaProduto(produto)) {
            const produtoCopy = Object.assign({}, produto);
            this.produtos.push(produtoCopy);
            this.produto.nome = null;
            this.produto.valor = null;
        } else {
            console.log("Produto precisa ter propriedades definidas");
        }
    }


}
