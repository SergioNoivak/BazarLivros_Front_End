import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import {CadastroAnuncioComponent} from './cadastro-anuncio/cadastro-anuncio.component';
import { EditarContaComponent } from './editar-conta/editar-conta.component';

const routes: Routes = [
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'minhaConta',
    component: MinhaContaComponent
  },
  {
    path: 'cadastro-anuncio',
    component: CadastroAnuncioComponent
  },
  {
    path: 'editar-conta',
    component: EditarContaComponent
  }


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
