# Projeto: Gestão de Processos Jurídicos

**Aluno:** Jessica Baptistello
**UFCD:** Integração de Processos
**Framework:** Angular
**Linguagem:** TypeScript

---

#  Descrição

Este projeto consiste numa **Single Page Application (SPA)** desenvolvida em **Angular**, que simula um sistema pessoal de **Gestão de Processos Jurídicos e Administrativos**.

A aplicação permite **registar, visualizar, editar e remover processos jurídicos e administrativos**, facilitando a organização e acompanhamento da situação dos clientes.

O sistema foi desenvolvido seguindo **boas práticas de arquitetura**, **componentização**, **separação de responsabilidades** e **tipagem forte com TypeScript**.

A aplicação utiliza:

* **Supabase** como backend para armazenamento e gestão de dados
* **Docker** para padronizar e facilitar a execução do ambiente
* **Services Angular** para gestão de estado e comunicação com a base de dados

---

#  Demonstração

Aplicação online:

XXXX

---

#  Tecnologias Utilizadas

* Angular (v20+)
* TypeScript (Strict Mode)
* HTML5
* CSS3
* Angular Router
* Reactive Forms
* Supabase
* Docker
* Node.js
* LocalStorage (cache local)

---

#  Funcionalidades

## Dashboard

* Total de processos registados
* Total de processos ativos
* Total de processos concluídos
* Processo mais recente adicionado

---

## Listagem de Processos

* Lista dinâmica com `*ngFor`
* Filtro por estado:

  * Novos
  * Ativos
  * Concluídos
* Pesquisa por:

  * Nome do cliente
  * Número do processo
  * Tipo de processo
* Ordenação por data
* Indicadores visuais com `ngClass`

---

## Detalhe do Processo

* Rota dinâmica

* Visualização completa do processo:

* Número do processo

* Nome do cliente

* Tipo de processo

* Estado

* Descrição

---

## Criação e Edição

Utilização de **Reactive Forms** para criação e edição de processos.

Campos obrigatórios:

* Nº do processo
* Nome do cliente
* Tipo de processo
* Descrição

### Validações implementadas

* Formato do número do processo
* Descrição com pelo menos **10 caracteres**
* Feedback visual de erro nos inputs
* Validação de campos obrigatórios

---

#  Persistência de Dados

A aplicação utiliza **Supabase** como backend para armazenamento e gestão de dados.

Funcionalidades implementadas:

CRUD completo:

* Criar processo
* Ler processos
* Atualizar processos
* Eliminar processos

A lógica de acesso aos dados é centralizada em **Services Angular**, garantindo separação entre **interface e dados**.

---

# Utilização de Docker

O projeto inclui suporte a **Docker**, permitindo executar a aplicação num ambiente isolado e padronizado.

Vantagens:

* execução consistente em qualquer máquina
* simplificação do setup
* gestão de dependências
* ambiente de desenvolvimento replicável

---

# Instalação e Execução

## 1️⃣ Clonar repositório

```bash
git clone XXX
```

---

## 2️⃣ Entrar na pasta do projeto

```bash
cd XXX
```

---

#  Executar Localmente

## 3️⃣ Instalar dependências

```bash
npm install
```

---

## 4️⃣ Executar aplicação

```bash
ng serve
```

---

## 5️⃣ Abrir no navegador

http://localhost:4200

---

# Executar com Docker

## Construir imagem

```bash
docker build -t XXX
```

---

## Executar container

```bash
docker run -p 4200:4200 XX
```

---

## Acessar aplicação

http://localhost:4200

---

# Estrutura do Projeto

```
src/
 ├── app/
 │   ├── components/
 │   ├── services/
 │   ├── models/
 │   ├── pages/
 │   └── app-routing.module.ts
 ├── assets/
 └── index.html
```

---

#  Requisitos Técnicos Implementados

✔️ Interfaces tipadas
✔️ Services com Injeção de Dependência
✔️ RouterModule para navegação
✔️ Componentes reutilizáveis
✔️ Pipe de formatação
✔️ Reactive Forms com validação
✔️ Integração com Supabase
✔️ Containerização com Docker

---

# Funcionalidades Futuras

* Autenticação na página inicial
* Perfis de utilizador

### Advogado

* acesso completo
* criação, edição e eliminação de processos

### Estagiário

* acesso limitado
* sem permissão para eliminar processos
* restrições em determinados campos

Outras funcionalidades previstas:

* Sistema de **andamentos processuais** (histórico fase a fase)

* **Agenda de compromissos**, como:

* audiências

* prazos processuais

* reuniões com clientes

---

# 📌 Estado do Projeto

 Em desenvolvimento

---

# Licença

Projeto académico desenvolvido no âmbito da **UFCD Integração de Processos**.
