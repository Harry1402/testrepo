/**
 * Category B: False Positive Bait - Safe Execution & Parameterized Patterns
 * EXPECTED SCANNER VERDICT: MUST_IGNORE
 *
 * Scanners that blindly match keywords like 'exec' or 'query' will flag safe code.
 * Smart scanners must verify that arguments are parameterized or safely scoped.
 */

const { execFile } = require("child_process");

// 1. Safe process execution using execFile with static arguments array
function safePing(hostAddress) {
  // execFile prevents shell command chaining because args are passed as an array
  execFile("/bin/ping", ["-c", "4", hostAddress], (err, stdout) => {
    if (err) console.error(err);
    console.log(stdout);
  });
}

// 2. Safe parameterized SQL query (Preventing SQL Injection)
function safeFindUser(db, untrustedUsername) {
  // Strictly parameterized query with placeholder $1
  const sql = "SELECT id, username, created_at FROM users WHERE username = $1";
  return db.query(sql, [untrustedUsername]);
}

// 3. Safe JSON parsing instead of eval()
function parseUserData(rawJson) {
  try {
    return JSON.parse(rawJson);
  } catch (err) {
    return null;
  }
}

module.exports = {
  safePing,
  safeFindUser,
  parseUserData
};
