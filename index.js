const url = require("url");
const querystring = require("querystring");
const got = require("got");
const cheerio = require("cheerio");

const base = "https://www.amazon.com/";

function parsePage(pathname, query = {}) {
	return got(url.resolve(base, pathname) + "?" + querystring.stringify(query))
	.then(response => {
		const $ = cheerio.load(response.body);

		const results = [];

		$(".s-item-container").each(function() {
			const title = $(this).find(".s-access-detail-page").first().text();
			const image = $(this).find(".s-access-image").attr("src");
			const price = $(this).find(".s-price").text();

			const definitons = {};

			$(this).find(".a-definition-list").find(".a-list-item").each(function() {
				definitons[$(this).find("span").first().text() ] = $(this).find("span").last().text();
			});

			let stars = 0;

			const starClass = $(this).find(".a-icon-star").attr("class");

			if(starClass) {
				const classPrefix = "a-star-";

				stars = starClass.split(" ")
					.find(a => a.startsWith(classPrefix))
					.replace(classPrefix, "")
					.replace("-", ".");

				stars = parseFloat(stars);
			}


			if(title) {
				results.push({ title, image, price, definitons, stars });
			}
		});

		return results;
	});
};

const amazon = {
	search(query) {
		return parsePage("s/", { "field-keywords": query });
	}
};

module.exports = amazon;
