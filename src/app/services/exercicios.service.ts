import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciciosService {

  constructor(private httpClient: HttpClient) { }
  url = 'https://api.api-ninjas.com/v1/exercises';
  getExercicios(musculo: string = ''): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Api-Key': 'e/OrqyCESjGsRE2d1G/X2w==FpPN7n68rogHpWTq'
    });
    const requestOptions = { headers: headers };
    let tipo = '';
    if (musculo != ''){
      tipo = '?muscle=' + musculo;
    }
    return this.httpClient.get(this.url + tipo, requestOptions);
  }
}
