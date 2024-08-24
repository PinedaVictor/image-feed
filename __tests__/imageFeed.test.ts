import { getFlickrFeed } from "../src/app/api/actions/flickr";

describe("API server calls Flickr API with empty input", () => {
  it("should return data greater then 1", async () => {
    // Call the API
    const imgFeedData = await getFlickrFeed("");
    // Verify the response
    expect(imgFeedData).toBeInstanceOf(Array);
    expect(imgFeedData.length).toBeGreaterThan(0);
  });
});

describe("API server calls Flickr API with blue green grass", () => {
  it("should return data greater then 1", async () => {
    // Call the API
    const imgFeedData = await getFlickrFeed("blue green grass");
    // Verify the response
    expect(imgFeedData).toBeInstanceOf(Array);
    expect(imgFeedData.length).toEqual(0);
  });
});
