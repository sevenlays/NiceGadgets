module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'plugin:cypress/recommended',
  ],
  plugins: [
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
        {
          endOfLine: "lf",
        },
    ],
  },
};
