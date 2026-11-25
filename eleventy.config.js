import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Rewrites absolute URLs ("/posts/...") so the site works under a
  // sub-path such as https://user.github.io/repo/ (set with --pathprefix).
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("src/assets");

  // All blog entries, newest first.
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date)
  );

  // Unique list of tags used by the posts (excluding the internal "posts" tag).
  eleventyConfig.addCollection("tagList", (api) => {
    const tags = new Set();
    for (const item of api.getFilteredByGlob("src/posts/*.md")) {
      for (const tag of item.data.tags || []) {
        if (tag !== "posts") tags.add(tag);
      }
    }
    return [...tags].sort();
  });

  // Human readable date: "5 October 2026".
  eleventyConfig.addFilter("readableDate", (date) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(date)
  );

  // Machine readable date for <time datetime="...">.
  eleventyConfig.addFilter("isoDate", (date) => date.toISOString().slice(0, 10));

  // Estimated reading time at ~220 words per minute.
  eleventyConfig.addFilter("readingTime", (content) => {
    const words = String(content).replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 220))} min read`;
  });

  eleventyConfig.addFilter("withTag", (posts, tag) =>
    posts.filter((post) => (post.data.tags || []).includes(tag))
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
