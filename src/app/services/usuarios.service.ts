import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private listaUsuarios: any[];

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService) {
    this.listaUsuarios = [];
  }

  get usuarios(){
    return this.listaUsuarios;
  }

  registrar(usuario: any){
    this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.senha).then(user =>{
      console.log(user);
      window.location.href = "/pagina-principal";
    }).catch((error) => {
      console.log(error);
      alert(this.firebaseError(error.code));
    });
  }

  firebaseError(code: string) {
    switch(code) {
      case 'auth/email-already-in-use':
        return 'Email ja utilizado';
      case 'auth/weak-password':
        return 'Senha fraca(minimo 6 caracteres)';
      case 'auth/invalide-email':
        return 'Email invalido';
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/user-not-found':
        return 'Email nao cadastrado';
      default:
        return 'Erro desconhecido';
    }
  }

  logar(usuario: any){
    this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.senha)
      .then((user) => {
        console.log(user);
        window.location.href = "/pagina-principal";
      }).catch((error) => {
        console.log(error);
        alert(this.firebaseError(error.code));
      });
  }

  adicionar(usuario: any){
    usuario.data = new Date();
    this.listaUsuarios.push(usuario);
  }
}
