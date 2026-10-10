/**
 * Category A: True Positives - Standard Credential Formats
 * EXPECTED SCANNER VERDICT: MUST_FLAG
 *
 * This fixture contains synthetic tokens following vendor formats
 * (AWS, GitHub, Stripe, JWT, Private Keys) to verify scanner Recall.
 */

// 1. Synthetic AWS Access Key ID
const awsAccessKey = "AKIA1111222233334444";
const awsSecretKey = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// 2. Synthetic GitHub Personal Access Token (PAT)
const githubPat = "ghp_0123456789abcdefghijklmnopqrstuvwxyz";

// 3. Synthetic Stripe Secret Key
const stripeApiKey = "sk_live_51A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P";

// 4. Synthetic Slack Bot Token
const slackBotToken = "xoxb-123456789012-3456789012345-abcdefghijklmnopqrstuvwx";

// 5. Synthetic JSON Web Token (Hardcoded secret signature)
const hardcodedJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// 6. Hardcoded RSA Private Key Block
const rsaPrivateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA0Y3t8M4z1Z3r2F5...synthetic...test...key...block
-----END RSA PRIVATE KEY-----`;

module.exports = {
  awsAccessKey,
  awsSecretKey,
  githubPat,
  stripeApiKey,
  slackBotToken,
  hardcodedJwt,
  rsaPrivateKey
};
