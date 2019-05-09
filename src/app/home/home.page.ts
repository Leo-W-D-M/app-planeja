import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    //variavel é um array
    planejamentos = []
    //ele é iniciado toda vez que entre na pagina
    ionViewDidEnter() {
        //zera o array
        this.planejamentos = []
        //define o tamanho do banco
        const tamanhoBanco = sessionStorage.length
        //let é a criacao de variavel em tapscript
        for (let index = 0; index < tamanhoBanco; index++) {
            const chave = sessionStorage.key(index)
            if(chave !== 'ionic-persist-config') {
                const planejamento = sessionStorage.getItem(chave)
                this.planejamentos.push(JSON.parse(planejamento))
            }
        }
    }
}
