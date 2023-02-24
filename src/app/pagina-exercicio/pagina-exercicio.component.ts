import { ExerciciosService } from './../services/exercicios.service';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pagina-exercicio',
  templateUrl: './pagina-exercicio.component.html',
  styleUrls: ['./pagina-exercicio.component.css']
})
export class PaginaExercicioComponent implements OnInit{
  metaS = {desc: 'Meta Semanal', cor: '#FFDE59', progresso: 4, meta: 7, is_input: false};
  metaM = {desc: 'Meta Mensal', cor: '#FFDE59', progresso: 12, meta: 25, is_input: false};
  treinosPessoa = [
    {treino: 'A', muscle: 'biceps'},
    {treino: 'B', muscle: 'chest'},
    {treino: 'C', muscle: 'quadriceps'},];
  treinos:any = [];
  nenhumExercicio = true;

  constructor(private exerciciosService: ExerciciosService){}

  ngOnInit(): void {
    this.treinosPessoa.forEach(element => {
      let exercicio:any = {};
      this.exerciciosService.getExercicios(element.muscle).subscribe(data => {
        exercicio = data;
        console.log('EXERCICIO: ' + exercicio);
        this.treinos.push({treino: element.treino, exercicios: exercicio});
        this.nenhumExercicio = false;
      });
    });
  }
}
