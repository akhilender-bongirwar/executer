/**
 * Extracts the code block from the changed files based on start and end lines.
 * @param {Array} changedFiles - Array of files changed in the pull request
 * @param {number} codeStartLine - Start line of the code block
 * @param {number} codeEndLine - End line of the code block
 * @returns {string} The extracted code block
 */

function extractCodeBlock(changedFiles, codeStartLine, codeEndLine) {
    let codeBlock = "";
    for (const file of changedFiles) {
      if (file.status === "modified") {
        const fileContent = Buffer.from(file.patch, "base64").toString("utf-8");
        const fileLines = fileContent.split("\n");
  
        for (let i = codeStartLine; i <= codeEndLine; i++) {
          if (i >= 0 && i < fileLines.length) {
            codeBlock += fileLines[i] + "\n";
          }
        }
      }
    }
    return codeBlock;
  }


module.exports = { extractCodeBlock };
  