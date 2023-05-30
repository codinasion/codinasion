/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

// import handlers
const issueOpened = require("./handlers/issues-opened");
const issueClosed = require("./handlers/issues-closed");
const issueReopened = require("./handlers/issues-reopened");
const pullRequestOpened = require("./handlers/pull-request-opened");
const pullRequestClosed = require("./handlers/pull-request-closed");
const pullRequestReopened = require("./handlers/pull-request-reopened");
const pullRequestUnlabeled = require("./handlers/pull-request-unlabeled");

module.exports = (app) => {
  app.log.info("Yay, the app was loaded!!!");

  //**************** /////////// Issues /////////// ****************//

  // on opening an issue
  app.on("issues.opened", async (context) => {
    await issueOpened(app, context);
  });

  // on closing an issue
  app.on("issues.closed", async (context) => {
    await issueClosed(app, context);
  });

  // on issue reopened
  app.on("issues.reopened", async (context) => {
    await issueReopened(app, context);
  });

  //**************** /////////// Pull Requests /////////// ****************//

  // on opening a pull request
  app.on("pull_request.opened", async (context) => {
    await pullRequestOpened(app, context);
  });

  // on closing a pull request
  app.on("pull_request.closed", async (context) => {
    await pullRequestClosed(app, context);
  });

  // on pull request reopened
  app.on("pull_request.reopened", async (context) => {
    await pullRequestReopened(app, context);
  });

  // on unlabeled pull request
  app.on("pull_request.unlabeled", async (context) => {
    await pullRequestUnlabeled(app, context);
  });

  //// For more information on building apps:
  //// https://probot.github.io/docs/

  //// To get your app running against GitHub, see:
  //// https://probot.github.io/docs/development/
};
