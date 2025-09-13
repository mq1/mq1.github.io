export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "node_modules/@picocss/pico/css/pico.fluid.classless.purple.min.css": "pico.css"
    });
};
