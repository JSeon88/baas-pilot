module.exports = {
  extends: [
    "tui",
    "prettier",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [],
  ignorePatterns: [
    "src/vite-env.d.ts",
    "node_modules/",
    "dist/",
    "jest.config.js",
    "jest.setup.js",
    "**/*.spec.*",
    "*.html",
  ],
  rules: {
    "arrow-body-style": "off",
    complexity: "off",
    "prefer-destructuring": "off",
    "no-warning-comments": "off",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
    ],
    "max-depth": ["error", 5],
    "@typescript-eslint/no-explicit-any": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "no-plusplus": "off",
    "new-cap": "off",
    "dot-notation": "off",
  },
  overrides: [
    {
      files: ["*.stories.*"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
