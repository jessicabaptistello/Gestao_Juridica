import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusProcesso } from '../../app/processo.model';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.css',
})
export class StatusBadgeComponent {
  @Input({ required: true }) status!: StatusProcesso;

  get classes(): Record<string, boolean> {
    return {
      badge: true,
      novo: this.status === 'Novo',
      ativo: this.status === 'Ativo',
      concluido: this.status === 'Concluído',
    };
  }
}

/* O StatusBadgeComponent é um componente reutilizável que exibe o estado de um processo.
Ele recebe o status através de @Input e aplica classes CSS dinamicamente 
utilizando um getter que retorna as classes com base no valor do status.

Este componente é um ótimo exemplo de boas práticas Angular:
componente reutilizável, @Input, classes dinâmicas, tipagem TypeScript, arquitetura modular

*/