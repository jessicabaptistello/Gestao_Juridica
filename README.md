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
 
* **Supabase** como backend para armazenamento e gestão de dados reais
* **Docker** para padronizar e facilitar a execução do ambiente
* **GitHub Actions** para Integração Contínua (CI) e Deploy automático
* **Services Angular** para gestão de estado e comunicação com a base de dados
 
---
 
#  Demonstração
 

🔗 [https://jessicabaptistello.github.io/Gestao_Juridica/](https://jessicabaptistello.github.io/Gestao_Juridica/)
 
---

# CI/CD e Segurança 

Para cumprir os requisitos de defesa, o projeto implementa:
* **CI (Integração Contínua):** GitHub Actions executa lint e build automaticamente em cada Pull Request.
* **Deploy Automático:** Ao fazer merge na branch `main`, a aplicação é atualizada online automaticamente.
* **Segurança de Dados:** As chaves do Supabase (URL/Key) estão protegidas em **GitHub Secrets**, não existindo segredos expostos no código fonte.
* **Versionamento:** Repositório organizado com branch `main` protegida e Pull Requests obrigatórios.

---

#  Tecnologias Utilizadas
 
* Angular (v22)
* TypeScript (Strict Mode)
* HTML5 / CSS3
* Supabase (Base de dados real )
* Docker & Dockerfile 
* GitHub Actions (CI/CD)
 
---
 
#  Funcionalidades
 
## Dashboard
* Total de processos registados, ativos e concluídos.
* Visualização do processo mais recente.
 
## Listagem de Processos
* Lista dinâmica com `*ngFor` e filtros por estado.
* Pesquisa por nome, número ou tipo de processo.
 
## Criação e Edição
* Utilização de **Reactive Forms** com validações.
* Feedback visual de erros e campos obrigatórios.
 
---
 
# 🐳 Utilização de Docker 
 
O projeto inclui suporte a **Docker**, permitindo construir e executar a aplicação num ambiente isolado:

```bash
docker build -t projeto-juridico . && docker run -p 4200:80 projeto-juridico

---

# Instalação e Execução Local 

1) Clonar repositório:

git clone [https://github.com/jessicabaptistello/Gestao_Juridica](https://github.com/jessicabaptistello/Gestao_Juridica)

2) Instalar dependências:

npm install --legacy-peer-deps

3) Executar aplicação:

npm start

#  Requisitos Técnicos Implementados (Resumo):

✔️ Repositório organizado
✔️ Branch main protegida com PR obrigatório
✔️ Pipeline CI/CD sem erros (Lint/Build)
✔️ Dockerfile funcional no repositório
✔️ Secrets protegidos no GitHub
✔️ Aplicação com dados reais do Supabase

Licença
Projeto académico desenvolvido no âmbito da UFCD Integração de Processos.
