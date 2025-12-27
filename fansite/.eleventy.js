module.exports = function (eleventyConfig) {
	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	eleventyConfig.addPassthroughCopy("files");
	eleventyConfig.addPassthroughCopy("fanlisting");
	eleventyConfig.addPassthroughCopy("bot");
	eleventyConfig.addPassthroughCopy("rss.xml");
	// This will stop the default behaviour of foo.html being turned into foo/index.html
	eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
};
