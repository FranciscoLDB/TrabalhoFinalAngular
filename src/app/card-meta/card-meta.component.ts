import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-meta',
  templateUrl: './card-meta.component.html',
  styleUrls: ['./card-meta.component.css']
})
export class CardMetaComponent implements OnInit {
  ngOnInit(){
    this.value = (this.progresso*100)/this.meta;
    this.porcent = this.value + '%';
  }

  @Input() desc = 'Calorias diarias';
  @Input() cor = '';
  @Input() progresso = 0;
  @Input() meta = 2000;
  @Input() is_input = false;
  bufferValue = 100;
  value = (this.progresso*100)/this.meta;
  porcent: string = this.value + '%';
  inputKcal: number = 0;

  atualizaProgresso(kcal: number = 0){
    this.progresso += kcal
    this.value = (this.progresso*100)/this.meta;
    this.porcent = this.value + '%';
  }
}


