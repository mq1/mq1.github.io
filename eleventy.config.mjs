export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "node_modules/@picocss/pico/css/pico.fluid.classless.purple.min.css": "pico.css"
    });
    eleventyConfig.addPassthroughCopy({
        "assets/_config.yml": "_config.yml"
    });
    eleventyConfig.addPassthroughCopy({
        "assets/org.flathub.VerifiedApps.txt": ".well-known/org.flathub.VerifiedApps.txt"
    });
};
