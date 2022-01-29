export default {
  buildOptions: {
    site: "https://mq1.eu/",
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
};
