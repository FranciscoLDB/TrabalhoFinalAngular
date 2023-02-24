import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pagina-pessoal',
  templateUrl: './pagina-pessoal.component.html',
  styleUrls: ['./pagina-pessoal.component.css']
})
export class PaginaPessoalComponent {
  pessoa = {
    nome: 'Leandro',
    idade: 20,
    peso: '77 kg',
    altura: '195 cm',
    sexo: 'Masculino',
    objetivo: 'Ganhar massa',
    metas: [
      { desc: 'Calorias Diarias', cor: '#63B83F', progresso: 600, meta: 2000},
      { desc: 'Calorias Semanais', cor: '#63B83F', progresso: 6000, meta: 14000},
      { desc: 'Água Diaria', cor: '#38B6FF', progresso: 1750, meta: 2000},
      { desc: 'Água Semanal', cor: '#38B6FF', progresso: 8500, meta: 14000},
      { desc: 'Excercicios Semanais', cor: '#FFDE59', progresso: 4, meta: 7},
      { desc: 'Excercicios Mensais', cor: '#FFDE59', progresso: 12, meta: 25},
    ],
  }

  constructor(){
  }
}
