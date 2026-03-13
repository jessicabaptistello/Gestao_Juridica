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
  // Injeções de dependência
  public router = inject(Router);
  public readonly processoService = inject(ProcessoService);

  // --- ESTADO DA APLICAÇÃO ---
  isLogado = false;
  modoRegisto = false; // Controla se mostra Login ou Registo no HTML
  usuarioLogin = '';
  senhaLogin = '';

  // --- DADOS DO UTILIZADOR E PROCESSOS ---
  dataDeHoje: string = new Date().toLocaleDateString('pt-PT');
  nomeUsuario = '';
  listaDeProcessos: Processo[] = [];

  ngOnInit() {
    // A aplicação começa no ecrã de login
  }

  // --- FUNÇÃO DE LOGIN (Procura no db.json) ---
  async fazerLogin() {
    if (!this.usuarioLogin || !this.senhaLogin) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(`${environment.apiUrl}/usuarios?username=${this.usuarioLogin}&password=${this.senhaLogin}`);
      const usuarios = await response.json();

      if (usuarios && usuarios.length > 0) {
        this.isLogado = true;
        this.nomeUsuario = `, ${usuarios[0].username}`;
        this.carregarDados(); // Carrega os processos após login com sucesso
      } else {
        alert('Utilizador ou senha incorretos!');
      }
    } catch (error) {
      alert('Erro ao ligar ao servidor (db.json). Verifique o json-server.');
    }
  }

  // --- FUNÇÃO DE REGISTO (Guarda no db.json) ---
  async criarConta() {
    if (!this.usuarioLogin || !this.senhaLogin) {
      alert('Preencha os dados para criar a conta.');
      return;
    }

    try {
      // 1. Verifica se o utilizador já existe
      const check = await fetch(`${environment.apiUrl}/usuarios?username=${this.usuarioLogin}`);
      const existentes = await check.json();

      if (existentes.length > 0) {
        alert('Este nome de utilizador já está ocupado.');
        return;
      }

      // 2. Envia os dados para o db.json usando POST
      await fetch(`${environment.apiUrl}/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.usuarioLogin,
          password: this.senhaLogin
        })
      });

      alert('Conta criada com sucesso! Já pode fazer o login.');
      this.modoRegisto = false; // Volta para o ecrã de login
      this.senhaLogin = '';     // Limpa a senha por segurança
    } catch (error) {
      alert('Erro ao registar o utilizador.');
    }
  }

  // --- FUNÇÃO DE LOGOUT ---
  sair() {
    this.isLogado = false;
    this.usuarioLogin = '';
    this.senhaLogin = '';
    this.nomeUsuario = '';
    this.router.navigate(['/']); // Opcional: volta para a rota raiz
  }

  // --- CARREGAMENTO DE DADOS (KPIs) ---
  async carregarDados() {
    try {
      const response = await fetch(`${environment.apiUrl}/processos`);
      if (response.ok) {
        this.listaDeProcessos = await response.json();
      } else {
        // Fallback para o LocalStorage via Service
        this.processoService.processos$.subscribe(p => this.listaDeProcessos = p);
      }
    } catch {
      this.processoService.processos$.subscribe(p => this.listaDeProcessos = p);
    }
  }

  // Funções de exportação chamadas pelos botões do HTML
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