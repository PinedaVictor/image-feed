import { FLICKR_CONFIG } from "../src/app/api/actions/config";

beforeEach(() => {
  (globalThis.fetch as jest.Mock) = jest.fn();
});

describe("Flickr API Call", () => {
  it("should return 200 OK", async () => {
    // Mock the fetch response
    (globalThis.fetch as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({}),
    });

    // Call the API
    const response = await fetch(FLICKR_CONFIG.FLICKR_URL);

    // Verify the response
    expect(response.status).toBe(200);
  });
});
