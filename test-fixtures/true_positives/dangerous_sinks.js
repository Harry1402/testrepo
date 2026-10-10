/**
 * Category A: True Positives - Dangerous Execution Patterns & Injections
 * EXPECTED SCANNER VERDICT: MUST_FLAG
 *
 * This fixture contains hazardous code patterns that an advanced scanner
 * should detect: eval(), command injection, and raw string query concatenation.
 */

const { exec } = require("child_process");

// 1. Dangerous dynamic code execution via eval
function executeUserSnippet(userInput) {
  // MUST_FLAG: Direct arbitrary code execution sink
  return eval(userInput);
}

// 2. Dangerous OS command execution with unvalidated user input
function pingHost(untrustedHost) {
  // MUST_FLAG: Command injection vulnerability
  exec(`ping -c 4 ${untrustedHost}`, (err, stdout) => {
    if (err) console.error(err);
    console.log(stdout);
  });
}

// 3. Dangerous dynamic function constructor
function createDynamicHandler(userScript) {
  // MUST_FLAG: Dynamic Function constructor is an eval equivalent
  const fn = new Function("req", "res", userScript);
  return fn;
}

// 4. Raw string concatenation for SQL query construction
function insecureFindUser(db, untrustedUsername) {
  // MUST_FLAG: Unparameterized SQL query concatenation
  const query = "SELECT * FROM users WHERE username = '" + untrustedUsername + "'";
  return db.query(query);
}

module.exports = {
  executeUserSnippet,
  pingHost,
  createDynamicHandler,
  insecureFindUser
};
