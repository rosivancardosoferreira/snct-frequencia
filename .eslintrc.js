module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "prettier"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "prettier/prettier": "error",
        "space-before-function-paren": "off",
        "react/prop-types": "off",
        "semi": [2, "always"],
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
      },
    },
  ],
};
