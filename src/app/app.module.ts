import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardMetaComponent } from './card-meta/card-meta.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { PaginaPessoalComponent } from './pagina-pessoal/pagina-pessoal.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { PaginaAlimentacaoComponent } from './pagina-alimentacao/pagina-alimentacao.component';
import { CardAlimentacaoComponent } from './card-alimentacao/card-alimentacao.component';
import { PaginaExercicioComponent } from './pagina-exercicio/pagina-exercicio.component';
import { PaginaSaudeComponent } from './pagina-saude/pagina-saude.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    CardMetaComponent,
    PaginaPessoalComponent,
    PaginaLoginComponent,
    FormLoginComponent,
    FormCadastroComponent,
    PaginaAlimentacaoComponent,
    CardAlimentacaoComponent,
    PaginaExercicioComponent,
    PaginaSaudeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
