Quer contribuir para o projeto? Que ótimo! Basta seguir algumas poucas orientações:

# Orientações Gerais

- Ao iniciar uma contribuição, faça um Fork, faça suas modificações, e depois um Pull Request.
- Recomendo contribuir com base em uma das [issues](https://github.com/startup-of-zero-reais/szr-ui/issues) já criadas, elas geralmente dão a direção do projeto.
- Tenha certeza de que já leu todo o [README](https://github.com/startup-of-zero-reais/szr-ui/blob/main/README.md) e já consegue executar seu projeto com sucesso.
- Implemente os testes necessários.
- Lembre-se de atualizar JsDocs, comentários e o README, se for o caso.

# Checks

- Os pushes e pull requests serão validados pelo [Workflow](https://github.com/startup-of-zero-reais/szr-ui/blob/main/.github/workflows/quality_gate.yml) configurado no [GitHub Actions](https://github.com/startup-of-zero-reais/szr-ui/actions) do repositório. Ele garante:
  - Formatação correta do código.
  - Ordem de imports correta no código.
  - Testes de unidade passando e cobrindo 80% dos componentes.
  - Build e Transpilação do código funcionando.
  - Quality Gate passando.
- Caso qualquer um desses itens não seja validado, o Push não passará pelos Checks, e vou pedir pra você melhorar o Pull Request. :D

# Verify

Antes de realizar um PR, ou mesmo um push, o mais fácil é executar um `npm run verify`. 
Isso irá garantir todos os checks citados acima antes mesmo de você subir seu código.

No caso da formatação e dos imports, esse comando irá modificar seus arquivos se necessário.