import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

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


  }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
