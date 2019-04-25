import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-plano',
  templateUrl: './novo-plano.page.html',
  styleUrls: ['./novo-plano.page.scss'],
})
export class NovoPlanoPage implements OnInit {

  erro;

  constructor() { }

  ngOnInit() {

  }

  calcular(form){
    const nomePlano = form.value.nome
    const custoMensal = form.value.custoMensal
    const faturamentoMensal = form.value.faturamentoMensal

    if(parseInt(custoMensal) > parseInt(faturamentoMensal))
    {
      this.erro = "Seu custo fixo é maior que seu faturamento mensal."
    }
    else
    {
      //transforma o form inteiro em string pra guardar no banco de dados do navegador
      sessionStorage.setItem(nomePlano, JSON.stringify(form.value))
      this.erro = "Cadastrodo com suscesso!"
      form.reset()
    }
    

  }
}
