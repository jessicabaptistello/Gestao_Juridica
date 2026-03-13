import { Routes } from '@angular/router';

import { DashboardPageComponent } from './pages/dashboard/dashboard';
import { ListaPageComponent } from './pages/lista/lista';
import { DetalhePageComponent } from './pages/detalhe/detalhe';
import { FormularioPageComponent } from './pages/formulario/formulario';

// Cada um deles será mostrado quando o utilizador acessar uma rota específica.

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'lista', component: ListaPageComponent },
  { path: 'detalhe/:id', component: DetalhePageComponent },
  { path: 'novo-processo', component: FormularioPageComponent },
  { path: 'editar/:id', component: FormularioPageComponent },
  { path: '**', redirectTo: 'dashboard' }, // O coringa // Essa rota captura qualquer URL que não exista. 
  //Isso evita erros de navegação.
];

/*
Esse código define o sistema de rotas da aplicação Angular.
Ele diz qual página deve aparecer dependendo da URL.

Em aplicações Angular, as rotas funcionam como navegação entre páginas, 
mas sem recarregar o site. */

/* Este arquivo define o sistema de rotas da aplicação Angular.
Cada rota associa um caminho da URL a um componente específico, 
permitindo navegar entre páginas como dashboard, lista de processos, detalhes e formulário.
Algumas rotas utilizam parâmetros dinâmicos, 
como :id, para identificar processos específicos.
Também existe uma rota padrão e uma rota curinga para redirecionar caminhos 
inválidos para o dashboard.

O Angular Router permite criar uma Single Page Application (SPA), 
onde a navegação entre páginas acontece sem recarregar o navegador. */ 