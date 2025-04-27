import { compat } from '@eslint/eslintrc';

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // disable only selected rules inside lib/generated
  {
    files: ["lib/generated/**"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-this-alias":             "off",
      "@typescript-eslint/no-unused-vars":            "off",
      "@typescript-eslint/no-require-imports":        "off",
    },
  },
];

export default config;
