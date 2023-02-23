import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagina-alimentacao',
  templateUrl: './pagina-alimentacao.component.html',
  styleUrls: ['./pagina-alimentacao.component.css']
})
export class PaginaAlimentacaoComponent {
  alimentacao = [
    {dia: 'segunda-feira', almoco: 'batata-recheada', janta: 'arroz e frango grelhado'},
    {dia: 'terça-feira', almoco: 'strogonoff', janta: 'sopa de feijão'},
    {dia: 'quarta-feira', almoco: 'Tomate recheado com creme de ricota.', janta: 'arroz e frango grelhado'},
    {dia: 'quinta-feira', almoco: 'Quibe de abobrinha na travessa.', janta: 'sopa de feijão'},
    {dia: 'sexta-feira', almoco: 'Macarrão com brócolis e pesto.', janta: 'arroz e frango grelhado'},
    {dia: 'sabado', almoco: 'Nhoque de abóbora com molho de espinafre.', janta: 'sopa de feijão'},
    {dia: 'domingo', almoco: 'Espaguete de batata-doce com molho de tomate.', janta: 'arroz e frango grelhado'},
  ]
  kcal: number = 20;
  progresso: number = 300;
  @Output() valorAlterado = new EventEmitter<number>();
  
  addKcal(){
    console.log(this.kcal);
    this.valorAlterado.emit(this.kcal);
    return this.kcal + this.progresso;
  }
}
