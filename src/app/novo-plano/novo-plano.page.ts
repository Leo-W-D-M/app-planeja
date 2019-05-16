import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-plano',
  templateUrl: './novo-plano.page.html',
  styleUrls: ['./novo-plano.page.scss'],
})
export class NovoPlanoPage {

  constructor(private nav: NavController){

  }
  erro
  calcular(form){
    const nomePlano = form.value.nome
    const custoMensal = form.value.custoMensal
    const faturamentoMensal = form.value.faturamentoMensal
    const custoMensalConvertido = parseInt(custoMensal)
    const faturamentoMensalConvertido = parseInt(faturamentoMensal)

    if(custoMensalConvertido > faturamentoMensalConvertido)
    {
      this.erro = "Seu custo fixo é maior que seu faturamento mensal."
    }
    else
    {
      //transforma o form inteiro em string pra guardar no banco de dados do navegador
      sessionStorage.setItem(nomePlano, JSON.stringify(form.value))
      form.reset()
      this.nav.back()
    }
    

  }
}
