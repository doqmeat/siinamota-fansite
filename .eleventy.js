const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	eleventyConfig.setServerPassthroughCopyBehavior("copy");

	// folders and files that eleventy won't process
	eleventyConfig.addPassthroughCopy("_files");
	eleventyConfig.addPassthroughCopy("fanlisting");
	eleventyConfig.addPassthroughCopy("bot");
	eleventyConfig.addPassthroughCopy("rss.xml");

	// This will stop the default behaviour of foo.html being turned into foo/index.html
	eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
	// default layout: main.html
	eleventyConfig.addGlobalData("layout", "main.html");
	// default date format
	eleventyConfig.addGlobalData("date", "git Last Modified");

	// shortcode for year {% year %} --- not using it rn
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// custom page.date ----- {{ page.date | postDate }}
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("dd.MMM.yy");
	});
};
