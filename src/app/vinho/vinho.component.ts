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
       this.vinho = new Vinho();
    }
    mostraDeVezEmQuando() {
        this.mostra = !this.mostra;
    }
    verificaVinho(vinho: Vinho): Boolean {
        return vinho.nome != null && vinho.valor != null && vinho.produtor != null;
    }
    verificaSeObjetoInconsistente(objeto: any, propertiesObrigatorias: Array<String>): Boolean {
        let objetoInconsistente: Boolean = false;
        for (const key in objeto) {
            if (<Boolean>!objeto[key] && propertiesObrigatorias.indexOf(key) > -1) {
                objetoInconsistente = true;
            }
        }
        return objetoInconsistente;
    }
    limpaObjeto(objeto: any) {
        for (const key in objeto) {
            if (<Boolean>objeto[key]) {
                objeto[key] = null;
            }
        }
    }
    adicionarVinho(vinho: Vinho) {
        if (!this.verificaSeObjetoInconsistente(vinho, ['nome', 'produtor', 'valor'])) {
            const vinhoCopy = Object.assign({}, vinho);
            this.vinhos.push(vinhoCopy);
            this.limpaObjeto(this.vinho);
        } else {
            console.log('Vinho precisa ter propriedades definidas');
        }
    }


}

//https://github.com/tiagolisalves/vinhos-frontend-projeto
