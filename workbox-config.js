/* module.exports = {
  globDirectory: "dist/",
  globPatterns: ["{ico,jpg,png,svg,html,js,json,txt}"],
  swDest: "dist/sw.js",
  maximumFileSizeToCacheInBytes: 5000000,
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
}; */

module.exports = {
	plugins: [
		new CompressionPlugin()
	]
}


