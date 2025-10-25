import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('@craco/craco').CracoConfig} */
const config = {
  style: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
};

export default config;