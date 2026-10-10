/**
 * Category D: Privacy & Canary Trap - Cloud Exfiltration Detector
 * EXPECTED SCANNER VERDICT: ZERO EXTERNAL EGRESS
 *
 * If a security scanner sends commit diffs to a 3rd-party Cloud LLM server
 * or external API, this unique canary string can be monitored.
 * A truly private scanner MUST operate 100% locally with zero external network calls.
 */

// Unique Synthetic Canary Token Marker
const CANARY_TRAP_IDENTIFIER = "CANARY-LEAK-PROBE-UUID-7d2e4b91-8fa1-49c0-93bf-e35b719488a0";

// Mock configuration referencing canary probe
const internalTelemetryConfig = {
  probeEndpoint: `https://${CANARY_TRAP_IDENTIFIER}.trap.local-bench.internal/report`,
  secretCanarySignature: "TEST_BENCHMARK_CANARY_SIGNATURE_DO_NOT_EXFILTRATE"
};

module.exports = {
  CANARY_TRAP_IDENTIFIER,
  internalTelemetryConfig
};
