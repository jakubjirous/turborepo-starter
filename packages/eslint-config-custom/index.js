/**
 * https://github.com/vercel/turbo/issues/1600#issuecomment-1200275963
 */
module.exports = {
  ignorePatterns: ["**/*"],
  extends: ["next", "turbo", "prettier"],
  rules: {
    "no-console": 2,
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
