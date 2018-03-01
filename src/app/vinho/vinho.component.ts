import { Component } from '@angular/core';
import { Vinho } from './vinho';

@Component({
  selector: 'app-vinho',
  templateUrl: './vinho.component.html',
  styleUrls : ['./vinho.component.css']
})
export class VinhoComponent {
    vinho: Vinho = new Vinho();
    mostra: Boolean;
    vinhos: Array<Vinho> = new Array();
    constructor() {
       this.vinho = new Vinho('', '', 0);
    }
    mostraDeVezEmQuando() {
        this.mostra = !this.mostra;
    }
    verificaVinho(vinho: Vinho): Boolean {
        return vinho.nome != null && vinho.valor != null && vinho.produtor != null;
    }
    verificaSeObjetoEstaVazio(objeto: any): Boolean {
        let objetoEstaVazio: Boolean = true;
        for (const key in objeto) {
            if (<Boolean>objeto[key]) {
                objetoEstaVazio = false;
            }
        }
        return objetoEstaVazio;
    }
    limpaObjeto(objeto: any) {
        for (const key in objeto) {
            if (<Boolean>objeto[key]) {
                objeto[key] = null;
            }
        }
    }
    adicionarVinho(vinho: Vinho) {
        if (!this.verificaSeObjetoEstaVazio(vinho)) {
            const vinhoCopy = Object.assign({}, vinho);
            this.vinhos.push(vinhoCopy);
            this.limpaObjeto(this.vinho);
        } else {
            console.log('Vinho precisa ter propriedades definidas');
        }
    }


}
