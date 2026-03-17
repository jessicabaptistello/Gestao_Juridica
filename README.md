[![CI/CD - Build e Deploy](https://github.com/jessicabaptistello/Gestao_Juridica/actions/workflows/ci.yml/badge.svg)](https://github.com/jessicabaptistello/Gestao_Juridica/actions/workflows/ci.yml)



#  Projeto: Gestão de Processos Jurídicos

**Aluno:** Jessica Baptistello  
**UFCD:** Integração de Processos  
**Framework:** Angular  
**Linguagem:** TypeScript  

---

##  Descrição

Este projeto consiste numa **Single Page Application (SPA)** desenvolvida em Angular, que simula um sistema pessoal de **Gestão de Processos Jurídicos e Administrativos**.  

A aplicação permite **registar, visualizar, editar e remover processos**, facilitando a organização e acompanhamento da situação dos clientes.

O sistema utiliza:

- **Supabase**: Backend para armazenamento e gestão de dados reais  
- **Docker**: Padronização e execução do ambiente em contentores  
- **GitHub Actions**: Automação de Integração Contínua (CI) e Deploy  
- **Services Angular**: Gestão de estado e comunicação com a base de dados  

---

##  Demonstração em Produção

Conforme os requisitos do projeto, a aplicação está disponível em:

 https://jessicabaptistello.github.io/Gestao_Juridica/

---

##  CI/CD e Segurança 

Para cumprir os requisitos de defesa, o projeto implementa:

- **CI (Integração Contínua)**: GitHub Actions executa lint e build automaticamente em cada Pull Request  
- **Deploy Automático**: Ao fazer merge na branch `main`, a aplicação é atualizada online automaticamente  
- **Segurança de Dados**: As chaves do Supabase estão protegidas em GitHub Secrets, sem segredos expostos no código  
- **Versionamento**: Repositório organizado com branch `main` protegida e Pull Requests obrigatórios  

---

##  Tecnologias Utilizadas

- Angular (v22)  
- TypeScript  
- HTML5 / CSS3  
- Supabase  
- Docker & Dockerfile  
- GitHub Actions (CI/CD)  

---

##  Funcionalidades

###  Dashboard
- Total de processos registados, ativos e concluídos  
- Visualização do processo mais recente adicionado  

###  Listagem de Processos
- Lista dinâmica com filtros por estado  
- Pesquisa por nome ou número  

###  Criação e Edição
- Utilização de Reactive Forms  
- Validações e feedback visual de erros  

---

##  Utilização de Docker

O projeto inclui suporte a Docker para execução num ambiente isolado:

```bash
# Construir a imagem
docker build -t projeto-juridico .

# Executar o container
docker run -p 4200:80 projeto-juridico
```

---

##  Instalação e Execução Local

### Clonar repositório
```bash
git clone https://github.com/jessicabaptistello/Gestao_Juridica
```

### Instalar dependências
```bash
npm install --legacy-peer-deps
```

### Executar aplicação
```bash
npm start
```

---

##  Requisitos Técnicos Implementados

- [x] Repositório GitHub organizado  
- [x] Branch `main` protegida com PR obrigatório  
- [x] Pipeline CI/CD funcional em Pull Requests  
- [x] Deploy automático após merge na `main`  
- [x] Dockerfile funcional no repositório  
- [x] Secrets protegidos no GitHub  
- [x] Dados reais via Supabase  

---

##  Licença

Projeto académico desenvolvido no âmbito da UFCD **Integração de Processos**.
