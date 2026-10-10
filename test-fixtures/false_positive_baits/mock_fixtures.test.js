/**
 * Category B: False Positive Bait - Unit Test Mocks & Documentation Examples
 * EXPECTED SCANNER VERDICT: MUST_IGNORE
 *
 * Scanners should differentiate between production leaks and documented
 * dummy samples or mock objects within test files.
 */

describe("Authentication Service Tests", () => {
  // 1. Official AWS documentation sample key (Publicly known dummy value)
  const DUMMY_DOCS_AWS_KEY = "AKIAIOSFODNN7EXAMPLE";
  const DUMMY_DOCS_AWS_SECRET = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

  // 2. Unit test mock token
  const mockStripeClient = {
    apiKey: "sk_test_fake_placeholder_token_for_jest_runner",
    charges: {
      create: () => Promise.resolve({ id: "ch_mock_12345", status: "succeeded" })
    }
  };

  test("should authenticate with mock provider", () => {
    expect(DUMMY_DOCS_AWS_KEY).toBeDefined();
    expect(mockStripeClient.apiKey).toContain("fake");
  });
});
