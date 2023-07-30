# Bem-vindo ao guia de contribuição do Codinasion

Agradecemos por investir seu tempo em contribuir para o nosso projeto! Qualquer contribuição que você fizer será refletida em [codinasion.org][1] e seus subdomínios :sparkles:.

Leia o nosso [Código de Conduta][2] para manter nossa comunidade acessível e respeitável.

Neste guia, você terá uma visão geral do fluxo de trabalho de contribuição, desde a abertura de um problema (issue), criação de um PR, revisão e fusão do PR.

## Guia para novos contribuidores

Para entender melhor o projeto, leia o [README][3]. Aqui estão alguns recursos para ajudá-lo a começar com as contribuições de código aberto:

- [Encontrando formas de contribuir para projetos de código aberto no GitHub][4]
- [Configurar o Git][5]
- [Fluxo de trabalho do GitHub][6]
- [Colaborando com pull requests][7]

## Primeiros passos

### Problemas (Issues)

#### Criar um novo problema

Se você deseja adicionar ou modificar o conteúdo do Codinasion, [verifique se já existe um problema relacionado][9]. Se não houver um problema relacionado, você pode abrir um novo problema usando um modelo de problema relevante [modelo de problema][10].

#### Resolver um problema

Dê uma olhada nos nossos [problemas existentes][11] para encontrar algo que lhe interesse. Você pode usar `labels` como filtros para refinar sua busca.

### Fazer alterações

#### Fazer alterações localmente

1. Faça um fork do repositório.

2. Clone o repositório forkado.

   ```bash
   git clone https://github.com/seu_nome_de_usuário/codinasion
   ```

3. Crie um novo branch de trabalho e comece suas alterações!

   ```bash
   git checkout -b nome-do-seu-novo-branch
   ```

4. Faça as alterações localmente.

   - Adicione novos recursos
   - Corrija bugs
   - Melhore a documentação, qualidade do código, desempenho, acessibilidade, experiência do usuário, interface do usuário, etc...

### Commite suas alterações

Faça o commit das alterações assim que estiver satisfeito com elas. Certifique-se de adicionar uma mensagem de commit descritiva.

### Pull Request (Pedido de Pull)

Quando terminar as alterações, crie um pull request, também conhecido como PR.

- Preencha o template "Pronto para revisão" para que possamos analisar o seu PR. Esse modelo ajuda os revisores a entenderem suas alterações, bem como o propósito do seu pull request.
- Não se esqueça de [vincular o PR a um problema (issue)][12], caso esteja resolvendo um.
- Habilite a opção para [permitir edições pelo mantenedor][13], para que o branch possa ser atualizado para a fusão.
  Assim que enviar seu PR, um membro da equipe Codinasion irá revisar sua proposta. Podemos fazer perguntas ou solicitar informações adicionais.
- Podemos solicitar alterações antes que o PR possa ser fundido, seja por meio de [alterações sugeridas][14] ou comentários no PR. Você pode aplicar as alterações sugeridas diretamente pela interface. Outras alterações podem ser feitas no seu fork, e então comitadas para o branch.
- À medida que você atualiza seu PR e aplica as alterações, marque cada conversa como [resolvida][15].
- Se você encontrar problemas de merge, confira este [tutorial de git][16] para ajudá-lo a resolver conflitos de merge e outros problemas.

### Seu PR foi fundido

Parabéns :tada::tada: A equipe Codinasion agradece :sparkles:

Uma vez que seu PR é fundido, suas contribuições estarão visíveis publicamente em [codinasion.org][1]

---

[1]: https://codinasion.org "codinasion.org"
[2]: ./CODE_OF_CONDUCT.md "Código de Conduta"
[3]: ./README.md "README"
[4]: https://docs.github.com/pt/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github "Encontrando formas de contribuir para projetos de código aberto no GitHub"
[5]: https://docs.github.com/pt/github/getting-started-with-github/set-up-git "Configurar o Git"
[6]: https://docs.github.com/pt/github/collaborating-with-issues-and-pull-requests/github-flow "Fluxo de trabalho do GitHub"
[7]: https://docs.github.com/pt/github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models "Colaborando com pull requests"
[9]: https://github.com/codinasion/codinasion/issues "Problemas"
[10]: https://github.com/codinasion/codinasion/issues/new/choose "Modelos de problemas"
[11]: https://github.com/search?q=is:open+user:codinasion&type=Issues "Problemas abertos no Codinasion"
[12]: https://docs.github.com/pt/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue "Vincular PR a um problema"
[13]: ttps://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork "Permitir edições pelo mantenedor"
[14]: https://docs.github.com/pt/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request "Alterações sugeridas"
[15]: https://docs.github.com/pt/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations "Marcar conversa como resolvida"
[16]: https://lab.github.com/githubtraining/managing-merge-conflicts "Tutorial de Git"