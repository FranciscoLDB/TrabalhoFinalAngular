import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private listaUsuarios: any[];

  constructor() {
    this.listaUsuarios = [];
  }

  get usuarios(){
    return this.listaUsuarios;
  }

  adicionar(usuario: any){
    usuario.data = new Date();
    this.listaUsuarios.push(usuario);
  }
}
