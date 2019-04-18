import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-plano',
  templateUrl: './novo-plano.page.html',
  styleUrls: ['./novo-plano.page.scss'],
})
export class NovoPlanoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  calcular(form){
    const nomePlano = form.values.nome
    const custoMensal = form.values.custoMensal
    const faturamentoMensal = form.values.faturamentoMensal

    alert("O nome do plano é:" + nomePlano)
    alert("O custo mensal é:" + custoMensal)
    alert("O faturamento é:" + faturamentoMensal)
  }

}
