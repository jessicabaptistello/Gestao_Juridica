import { Component, Pipe, PipeTransform, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment.development';
import { ProcessoService } from './processo.service';
import { Processo } from './processo.model';

@Pipe({
  name: 'saudacao',
  standalone: true,
})
export class SaudacaoPipe implements PipeTransform {
  transform(value: string): string {
    const hora = new Date().getHours();
    let msg = 'Bom dia';
    if (hora >= 13 && hora < 20) msg = 'Boa tarde';
    if (hora >= 20 || hora < 5) msg = 'Boa noite';
    return `${msg}${value}`;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SaudacaoPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent implements OnInit {

  public router = inject(Router);
  public readonly processoService = inject(ProcessoService);


  isLogado = false;
  modoRegisto = false; 
  utilizadorLogin = '';
  senhaLogin = '';

 
  dataDeHoje: string = new Date().toLocaleDateString('pt-PT');
  nomeutilizador = '';
  listaDeProcessos: Processo[] = [];

  ngOnInit() {
   
  }


  async fazerLogin() {
    if (!this.utilizadorLogin || !this.senhaLogin) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(`${environment.apiUrl}/utilizador?username=${this.utilizadorLogin}&password=${this.senhaLogin}`);
      const utilizador = await response.json();

      if (utilizador && utilizador.length > 0) {
        this.isLogado = true;
        this.nomeutilizador = `, ${utilizador[0].username}`;
        this.carregarDados(); 
      } else {
        alert('Utilizador ou senha incorretos!');
      }
    } catch (error) {
      alert('Erro.');
    }
  }


  async criarConta() {
    if (!this.utilizadorLogin || !this.senhaLogin) {
      alert('Preencha os dados para criar a conta.');
      return;
    }

    try {
      
      const check = await fetch(`${environment.apiUrl}/utilizador?username=${this.utilizadorLogin}`);
      const existentes = await check.json();

      if (existentes.length > 0) {
        alert('Este nome de utilizador já está ocupado.');
        return;
      }

      
      await fetch(`${environment.apiUrl}/utilizador`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.utilizadorLogin,
          password: this.senhaLogin
        })
      });

      alert('Conta criada com sucesso! Já pode fazer o login.');
      this.modoRegisto = false; 
      this.senhaLogin = '';     
    } catch (error) {
      alert('Erro ao registar o utilizador.');
    }
  }

 
  sair() {
    this.isLogado = false;
    this.utilizadorLogin = '';
    this.senhaLogin = '';
    this.nomeutilizador = '';
    this.router.navigate(['/']); 
  }

  
  async carregarDados() {
    try {
      const response = await fetch(`${environment.apiUrl}/processos`);
      if (response.ok) {
        this.listaDeProcessos = await response.json();
      } else {
        
        this.processoService.processos$.subscribe(p => this.listaDeProcessos = p);
      }
    } catch {
      this.processoService.processos$.subscribe(p => this.listaDeProcessos = p);
    }
  }

 
  exportarJSON() {
    const blob = this.processoService.exportarJsonBlob();
    this.baixarArquivo(blob, 'processos.json');
  }

  exportarExcel() {
    const blob = this.processoService.exportarCsvBlob();
    this.baixarArquivo(blob, 'processos.csv');
  }

  private baixarArquivo(blob: Blob, nome: string) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = nome;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}