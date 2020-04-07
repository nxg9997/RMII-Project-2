module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
      "airbnb/base"
    ],
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
      "no-underscore-dangle" : "off",
        "no-plusplus": "off"
    }
  };