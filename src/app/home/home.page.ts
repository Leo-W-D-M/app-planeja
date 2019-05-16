import { Component } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private alert:AlertController){}

    //variavel é um array
    planejamentos = []
    listar(){
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

    async exibirAlertaDeExclusao () {
        const alertTemp = await this.alert.create({
            header: 'Exclusão de Plano',
            subHeader: 'Deseja realmente excluir esse plano?',
            message: ''

        })
        await alertTemp.present()
    }


    excluir(nome){
        this.exibirAlertaDeExclusao()
        // sessionStorage.removeItem(nome)
        // this.listar()
    }
    //ele é iniciado toda vez que entre na pagin
    ionViewDidEnter() {
        this.listar()
    }
}
