import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {
  title = 'Vision Life';

  changeTitle (novoTitle:string) {
    this.title = novoTitle;
    console.log('change title to: ' + novoTitle);
  }
  sair(){
    window.location.href = "/";
  }
}


