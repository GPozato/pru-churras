import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  somarTento = '';
  resultado1= 0;
  resultado2= 0;
  pontos1 = 0;
  pontos2 = 0;
  valendo = 1;

  fundo = 'assets/truco.jpg';

  constructor() {}

  normal(){
    this.valendo=1;
  }

  truco(){
    this.valendo=3;
  }

  facao(){
    this.valendo=6;
  }

  marreco(){
    this.valendo=9;
  }

  ladrao(){
    this.valendo=12;
  }

  somaEsq(){
    this.pontos1 = this.valendo + this.pontos1;
  }

  somaDir(){
    this.pontos2 = this.valendo + this.pontos2;
  }

  menosEsq(){
    this.pontos1 = this.valendo - this.pontos1;
  }

  menosDir(){
    this.pontos2 = this.valendo - this.pontos2;
  }

  resultado(){
    if (this.pontos1){

    }
  }


  limparJogo() {
    this.resultado1 = 0;
    this.resultado2 = 0;
    this.pontos1 = 0;
    this.pontos2 = 0;
  }

}
