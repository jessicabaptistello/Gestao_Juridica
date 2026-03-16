import { Component, Pipe, PipeTransform, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment.development';
import { ProcessoService } from './processo.service';
import { Processo } from './processo.model';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

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
  private supabase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );

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

    this.carregarDados();
  }

  async fazerLogin() {
    if (!this.utilizadorLogin || !this.senhaLogin) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const { data: utilizadores, error } = await this.supabase
        .from('utilizadores')
        .select('*')
        .eq('username', this.utilizadorLogin.trim())
        .eq('password', this.senhaLogin.trim());

      if (error) throw error;

      if (utilizadores && utilizadores.length > 0) {
        this.isLogado = true;
        this.nomeutilizador = `, ${utilizadores[0].username}`;
        this.carregarDados(); 
      } else {
        alert('Utilizador ou senha incorretos!');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao tentar fazer login.');
    }
  }

  async criarConta() {
    if (!this.utilizadorLogin || !this.senhaLogin) {
      alert('Preencha os dados para criar a conta.');
      return;
    }

    try {
      const { data: existentes } = await this.supabase
        .from('utilizadores')
        .select('*')
        .eq('username', this.utilizadorLogin.trim());

      if (existentes && existentes.length > 0) {
        alert('Este nome de utilizador já está ocupado.');
        return;
      }

      const { error } = await this.supabase
        .from('utilizadores')
        .insert([{ username: this.utilizadorLogin.trim(), password: this.senhaLogin.trim() }]);

      if (error) throw error;

      alert('Conta criada com sucesso! Já pode fazer o login.');
      this.modoRegisto = false;
      this.senhaLogin = '';
    } catch (error) {
      console.error(error);
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

  carregarDados() {
    
    this.processoService.processos$.subscribe(p => {
      this.listaDeProcessos = p;
    });
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