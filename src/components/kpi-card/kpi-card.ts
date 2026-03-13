import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.css',
})
export class KpiCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) value!: number;
  @Input() subtitle = '';
  @Input() link: any[] | string = '/';
  @Input() bgClass: 'bg-total' | 'bg-novo' | 'bg-ativo' | 'bg-concluido' = 'bg-total';
}

// KPI: Key Performance Indicator
// No seu sistema ele mostra métricas como: total de processos, processos ativos, processos concluídos

// Este componente cria um cartão de indicadores (KPI) usado no dashboard da aplicação.
// Ele é reutilizável e recebe dados através de @Input, como título, valor, subtítulo,
// link e classe de cor.
// Isso permite mostrar diferentes métricas do sistema de forma visual e organizada.

// O componente foi projetado como reutilizável e parametrizável, 
// utilizando @Input para receber dados dinamicamente.