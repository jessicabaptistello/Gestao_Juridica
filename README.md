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
 
[cite_start]Aplicação online e funcional numa URL pública conforme os requisitos[cite: 18]:
🔗 [https://jessicabaptistello.github.io/Gestao_Juridica/](https://jessicabaptistello.github.io/Gestao_Juridica/)
 
---

# [cite_start] CI/CD e Segurança (Checklist de Sobrevivência) [cite: 1]

Para cumprir os requisitos de defesa, o projeto implementa:
* [cite_start]**CI (Integração Contínua):** GitHub Actions executa lint e build automaticamente em cada Pull Request[cite: 11, 12].
* [cite_start]**Deploy Automático:** Ao fazer merge na branch `main`, a aplicação é atualizada online automaticamente[cite: 13, 15].
* [cite_start]**Segurança de Dados:** As chaves do Supabase (URL/Key) estão protegidas em **GitHub Secrets**, não existindo segredos expostos no código fonte.
* [cite_start]**Versionamento:** Repositório organizado com branch `main` protegida e Pull Requests obrigatórios[cite: 5, 6, 9].

---

#  Tecnologias Utilizadas
 
* Angular (v22)
* TypeScript (Strict Mode)
* HTML5 / CSS3
* [cite_start]Supabase (Base de dados real )
* [cite_start]Docker & Dockerfile 
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
 
# [cite_start]🐳 Utilização de Docker (Requisito 6) [cite: 19]
 
[cite_start]O projeto inclui suporte a **Docker**, permitindo construir e executar a aplicação num ambiente isolado[cite: 22]:

```bash
docker build -t projeto-juridico . && docker run -p 4200:80 projeto-juridico


Instalação e Execução Local (Item 9) 

1) Clonar repositório:

git clone [https://github.com/jessicabaptistello/Gestao_Juridica](https://github.com/jessicabaptistello/Gestao_Juridica)

2) Instalar dependências:

npm install --legacy-peer-deps

3) Executar aplicação:

npm start

📌 Requisitos Técnicos Implementados (Resumo):
✔️ Repositório organizado
✔️ Branch main protegida com PR obrigatório
✔️ Pipeline CI/CD sem erros (Lint/Build)
✔️ Dockerfile funcional no repositório
✔️ Secrets protegidos no GitHub
✔️ Aplicação com dados reais do Supabase

Licença
Projeto académico desenvolvido no âmbito da UFCD Integração de Processos.
