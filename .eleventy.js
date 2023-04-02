module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("main.css");
  eleventyConfig.addPassthroughCopy("CascadiaCode.woff2");
  eleventyConfig.addPassthroughCopy("img");
};