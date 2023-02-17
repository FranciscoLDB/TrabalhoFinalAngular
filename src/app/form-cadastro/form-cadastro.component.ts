import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit{
  hide: boolean = true;
  dataSource!: FormGroup;
  
  ngOnInit(): void {
    this.dataSource = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nome: new FormControl('', [Validators.required]),
      peso: new FormControl('', [Validators.required]),
      altura: new FormControl('', [Validators.required]),
      nascimento: new FormControl('', [Validators.required]),
      genero: new FormControl('', []),
      objetivo: new FormControl('', []),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  getErrorMessage() {
    if (this.dataSource.value.email.hasError('required')) {
      return 'Campo obrigatório';
    }

    return this.dataSource.value.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(data: any){
    console.log('submit!');
  }
}
