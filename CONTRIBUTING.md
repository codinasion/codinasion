# Welcome to Codinasion contributing guide

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [codinasion.org][1] (WIP) :sparkles:.

Read our [Code of Conduct][2] to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## New contributor guide

To get an overview of the project, read the [README][3]. Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub][4]
- [Set up Git][5]
- [GitHub flow][6]
- [Collaborating with pull requests][7]

## Getting started

Check to see what [types of contributions][8] we accept before making changes :sparkles:.

### Issues

#### Create a new issue

If you want to add or modify Codinasion content, [search if an issue already exists][9]. If a related issue doesn't exist, you can open a new issue using a relevant [issue template][10].

#### Solve an issue

Scan through our [existing issues][11] to find one that interests you. You can narrow down the search using `labels` as filters.

As a general rule, we accept assignment based contribution for `good first issue`. If you want to work on an issue, comment on the issue `!assign` and you will be auto assigned to the issue.

### Make Changes

<!-- #### Make changes in the UI

Click **Edit in GitHub** at the top of any Codinasion webpage to make small changes such as a typo, sentence fix, or a broken link. This takes you to the `.md` file where you can make your changes and [create a pull request](#pull-request) for a review. -->

#### Make changes locally

1. Fork the repository.

2. Clone the forked repository.

  ```bash
  git clone https://github.com/your_username/program
  ```

3. Create a working branch and start with your changes!

  ```bash
  git checkout -b your-new-branch-name
  ```

#### Add Content

- Add or modify program file (.py, .c, .cpp, etc) in corresponding folder.

### Commit your update

Commit the changes once you are happy with them. Make sure to add a descriptive commit message.

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.

- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.
- Don't forget to [link PR to issue][12] if you are solving one.
- Enable the checkbox to [allow maintainer edits][13] so the branch can be updated for a merge.
  Once you submit your PR, a Codinasion team member will review your proposal. We may ask questions or request for additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes][14] or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved][15].
- If you run into any merge issues, checkout this [git tutorial][16] to help you resolve merge conflicts and other issues.

### Your PR is merged

Congratulations :tada::tada: The Codinasion team thanks you :sparkles:

Once your PR is merged, your contributions will be publicly visible on the codinasion.org (WIP)

Now that you are part of the Codinasion community, see how else you can [contribute to codinasion][8]

---

[1]: https://codinasion.org (Work In Progress)
[2]: ./CODE_OF_CONDUCT.md (Code of Conduct)
[3]: ./README.md (README)
[4]: https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github (Finding ways to contribute to open source on GitHub)
[5]: https://docs.github.com/en/get-started/quickstart/set-up-git (Set up Git)
[6]: https://docs.github.com/en/get-started/quickstart/github-flow (GitHub flow)
[7]: https://docs.github.com/en/get-started/quickstart/collaborating-with-issues-and-pull-requests (Collaborating with pull requests)
[8]: ./types-of-contributions.md (Types of contributions)
[9]: https://github.com/codinasion/program/issues "Issues"
[10]: https://github.com/codinasion/program/issues/new/choose "Issue Template"
[11]: https://github.com/search?q=is:open+user:codinasion&type=Issues "Codinasion Open Issues"
[12]: https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue "Link PR to Issue"
[13]: ttps://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork "Allow maintainers to edit"
[14]: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request "Suggest Changes"
[15]: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations "Mark conversation as resolved"
[16]: https://lab.github.com/githubtraining/managing-merge-conflicts "Git Tutorial"
