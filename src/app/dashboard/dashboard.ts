import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  // Criamos os indicadores (KPIs)
  totalProcessos = 15;
  processosNovos = 3;
  processosAtivos = 10;
  processosConcluidos = 3;
}
