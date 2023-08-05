const axios = require("axios");

/**
 * Execute the provided code block and post the output as a comment on the pull request
 * @param {import('probot').Context} context - Probot context
 * @param {string} codeBlock - The code block to execute
 * @param {number} prNumber - Pull request number
 */
async function executeAndPostOutput(context, codeBlock, prNumber) {
  try {
    const payload = {
      language: "python",
      code: codeBlock,
    };

    const executeResponse = await axios.post("https://emkc.org/api/v2/piston/execute", payload);

    const output = executeResponse.data.stdout;


    const commentResponse = await context.octokit.issues.createComment({
      owner: context.payload.repository.owner.login,
      repo: context.payload.repository.name,
      issue_number: prNumber,
      body: `Code Execution Output:\n${output}`,
    });

    context.app.log.info(`Comment added: ${commentResponse.data.html_url}`);
  } catch (error) {
    context.app.log.error("Error executing code:", error);
  }
}

module.exports = { executeAndPostOutput };
