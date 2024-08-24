import { z } from "zod";

const flickrSchema = z.object({
  FLICKR_URL: z.string(),
});

const config = {
  FLICKR_URL: "https://www.flickr.com/services/feeds/photos_public.gne",
};

export const FLICKR_CONFIG = flickrSchema.parse(config);
