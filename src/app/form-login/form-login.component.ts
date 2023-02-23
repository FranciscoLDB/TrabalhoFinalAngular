import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  hide: boolean = true;
  dataSource!: FormGroup;
  
  ngOnInit(): void {
    this.dataSource = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
    })
  }

  getErrorMessage() {
    if (this.dataSource.value.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.dataSource.value.email.hasError('email') ? 'Not a valid email' : '';
  }

  onLogin(data: any){
    console.log('login!');
  }
}
