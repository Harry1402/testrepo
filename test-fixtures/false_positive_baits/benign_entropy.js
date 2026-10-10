/**
 * Category B: False Positive Bait - High Entropy Benign Strings
 * EXPECTED SCANNER VERDICT: MUST_IGNORE
 *
 * Dumb regex scanners relying on Shannon entropy often misclassify
 * commit hashes, UUIDs, asset encodings, and checksums as leaked secrets.
 */

// 1. Git Commit SHA-1 and SHA-256 hashes (High entropy, but purely benign)
const RELEASE_COMMIT_SHA = "e949053b21fa701ce26593d84a7e80d46387d558";
const MERGE_TREE_HASH = "f4c287a9561b369528d398e61f22ee35713c9413b827e1f40d65a28721c5bc79";

// 2. UUIDv4 Identifiers
const SESSION_CORRELATION_ID = "550e8400-e29b-41d4-a716-446655440000";
const REQUEST_TRACKING_UUID = "c3f912e0-7a89-4bc2-9e2a-18e3d645f091";

// 3. Base64 encoded image asset / SVG data
const TRANSPARENT_1PX_PNG_BASE64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// 4. Cryptographic checksums (Public integrity verification)
const SUBRESOURCE_INTEGRITY_HASH = "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC";

// 5. CSS module generated hash classnames
const CSS_SCOPED_CLASS = "HeaderComponent__button--3x8Kz9Q1w2M4p7";

module.exports = {
  RELEASE_COMMIT_SHA,
  MERGE_TREE_HASH,
  SESSION_CORRELATION_ID,
  REQUEST_TRACKING_UUID,
  TRANSPARENT_1PX_PNG_BASE64,
  SUBRESOURCE_INTEGRITY_HASH,
  CSS_SCOPED_CLASS
};
