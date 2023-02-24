import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  hide!: boolean;
  dataSource!: FormGroup;
  constructor(private router: Router, private usuariosService: UsuariosService){}

  ngOnInit(): void {
    this.hide = true;
    this.dataSource = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  onLogin($event){
    console.log('login!');
    this.usuariosService.logar($event);
  }
}
