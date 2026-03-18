## Quality Check (CI/CD)
Este Pull Request tem como objetivo validar a integridade do código através do pipeline automatizado.

### Checklist de Verificação:
- [ ] **Lint:** O código segue os padrões do projeto (sem erros de sintaxe/estilo)?
- [ ] **Build:** O projeto compila corretamente para produção?
- [ ] **Docker:** A imagem Docker foi gerada com sucesso?
- [ ] **Supabase:** As variáveis de ambiente estão configuradas?
---
*Este PR bloqueia o merge automaticamente se os status checks não ficarem verdes.*
