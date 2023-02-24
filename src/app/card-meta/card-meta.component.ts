import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-meta',
  templateUrl: './card-meta.component.html',
  styleUrls: ['./card-meta.component.css']
})
export class CardMetaComponent implements OnInit {
  ngOnInit(){
    this.value = (this.meta.progresso*100)/this.meta.meta;
    this.porcent = this.value + '%';
  }
  @Input() meta = {desc: '', cor: '', progresso: 200, meta: 2000, is_input: false};
  bufferValue = 100;
  value = (this.meta.progresso*100)/this.meta.meta;
  porcent: string = this.value + '%';
  inputKcal: number = 0;

  atualizaProgresso(kcal: number = 0){
    this.meta.progresso += kcal
    this.value = (this.meta.progresso*100)/this.meta.meta;
    this.porcent = this.value + '%';
  }
}


