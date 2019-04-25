import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //ele é iniciado toda vez que entre na pagina
  viewDidEnter(){
    const tamanhoBanco = sessionStorage.length
    //let é a criacao de variavel em tapscript
    for (let index = 0; index < sessionStorage.length; index++) {
      const element = sessionStorage[index];
      
    }
  }
}
