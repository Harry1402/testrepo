/**
 * Category C: Obfuscated Patterns - Evasive Credential Construction
 * EXPECTED SCANNER VERDICT: MUST_FLAG
 *
 * Developers or malicious actors frequently split or encode strings
 * to evade naive regex patterns like /AKIA[0-9A-Z]{16}/.
 */

// 1. Split String Concatenation to evade naive regex
const part1 = "AKIA";
const part2 = "9876543210ABCDEF";
const evadedAwsKey = part1 + part2;

// 2. Base64 encoded secret decoded at runtime
// Encodes: "ghp_9876543210fedcba9876543210fedcba1234"
const encodedTokenBase64 = "Z2hwXzk4NzY1NDMyMTBmZWRjYmE5ODc2NTQzMjEwZmVkY2JhMTIzNA==";
const decodedGitHubPat = Buffer.from(encodedTokenBase64, "base64").toString("utf-8");

// 3. Reversed string token reconstruction
// Reverses: "sk_live_obfuscated_stripe_token_54321"
const reversedKey = "12345_nekot_epirts_detacsufbo_evil_ks";
const reconstructedStripeKey = reversedKey.split("").reverse().join("");

// 4. Array joined token construction
const slackPrefix = ["xoxb", "999888777666", "5554443332221", "abcdefabcdefabcdefabcdef"].join("-");

module.exports = {
  evadedAwsKey,
  decodedGitHubPat,
  reconstructedStripeKey,
  slackPrefix
};
