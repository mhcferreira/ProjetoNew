import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 pessoa : Pessoa = new Pessoa();
  constructor() {}

salvar(){
  alert('teste salvar');
}
}
