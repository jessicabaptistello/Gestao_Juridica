import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProcessoService } from '../../processo.service'; // É o serviço que guarda e gere os processos.
import { Processo } from '../../processo.model'; // É o modelo de dados do processo.

type StatusFiltro = 'Todos' | 'Novo' | 'Ativo' | 'Concluído'; // Define os valores possíveis do filtro, para evitar erros


@Component({
  selector: 'app-lista-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class ListaPageComponent {
  private readonly processoService = inject(ProcessoService);
  private readonly route = inject(ActivatedRoute);

  processos: Processo[] = []; // Aqui guardamos todos os processos.

  termo = '';
  filtroStatus: StatusFiltro = 'Todos';

  // ordenação (requisito do enunciado)
  sortKey: 'numero' | 'cliente' | 'tipo' | 'status' | 'criadoEm' = 'criadoEm';
  sortDir: 'asc' | 'desc' = 'desc';

  constructor() {
    // dados
    this.processoService.processos$.subscribe(lista => {
      this.processos = lista;
    });

    // lê query params para abrir já filtrado (menu/dashboard)
    this.route.queryParamMap.subscribe(params => { // Isso permite abrir a página já filtrada.
      const s = params.get('status');
      if (s === 'Novo' || s === 'Ativo' || s === 'Concluído') this.filtroStatus = s;
      else this.filtroStatus = 'Todos';
    });
  }

  get listaFiltrada(): Processo[] {
    let lista = [...this.processos]; // Criamos uma cópia da lista.

    // filtro por status (pick list)
    if (this.filtroStatus !== 'Todos') {
      lista = lista.filter(p => p.status === this.filtroStatus);
    }

    // pesquisa
    const t = this.termo.trim().toLowerCase(); // Remove espaços e ignora maiúsculas.
    if (t) {
      lista = lista.filter(p =>
        p.numero.toLowerCase().includes(t) ||
        p.cliente.toLowerCase().includes(t) ||
        p.tipo.toLowerCase().includes(t)
      );
    }

    // ordenação
    lista.sort((a, b) => {
      const av = a[this.sortKey] as any;
      const bv = b[this.sortKey] as any;

      const cmp =
        typeof av === 'string' && typeof bv === 'string'
          ? av.localeCompare(bv)
          : av > bv ? 1 : av < bv ? -1 : 0;

      return this.sortDir === 'asc' ? cmp : -cmp;
    });

    return lista;
  }

  setSort(key: typeof this.sortKey) {
    if (this.sortKey === key) this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    else {
      this.sortKey = key;
      this.sortDir = 'asc';
    }
  }

  sortLabel(key: typeof this.sortKey) {
    if (this.sortKey !== key) return '';
    return this.sortDir === 'asc' ? ' ▲' : ' ▼';
  }

  excluir(id: number) {
    if (confirm('Deseja excluir este processo?')) {
      this.processoService.eliminar(id);
    }
  }

  // indicador visual (requisito ngClass) — simples e direto
  statusClass(status: Processo['status']) {
    return {
      badge: true,
      novo: status === 'Novo',
      ativo: status === 'Ativo',
      concluido: status === 'Concluído',
    };
  }
}

// Lista de processos

/*
Este componente: recebe os processos do ProcessoService, permite filtrar por status, 
permite pesquisar, permite ordenar colunas, permite excluir processos, mostra os dados na lista


O ListaPageComponent é responsável por apresentar todos os processos.
Ele consome dados do ProcessoService, permite filtrar por status,
 pesquisar por número, cliente ou tipo, ordenar por diferentes campos e excluir processos.
A lista exibida é calculada dinamicamente através do getter listaFiltrada.
*/