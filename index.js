// Deployments API example
// See: https://developer.github.com/v3/repos/deployments/ to learn more

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
const { extractCodeBlock } = require("./utils");
const { executeAndPostOutput } = require("./execute");
const axios = require("axios");

module.exports = (app) => {
  app.log.info("Yay, the app was loaded!");

  app.on(["pull_request_review_comment.created"], async (context) => {
    app.log.info("Yay, the app is in context!");

    const owner = context.payload.repository.owner.login;
    const repo = context.payload.repository.name;
    const prNumber = context.payload.pull_request.number;
    const comments = context.payload.comment;
    const text = comments.body;

    if (text === "/execute") {
      const codeStartLine = comments.original_start_line;
      const codeEndLine = comments.original_line;
      const filesResponse = await context.octokit.pulls.listFiles({
        owner,
        repo,
        pull_number: prNumber,
      });
      const changedFiles = filesResponse.data;
      const codeBlock = extractCodeBlock(changedFiles, codeStartLine, codeEndLine);
      await executeAndPostOutput(context, codeBlock, prNumber);
    }
  });
};