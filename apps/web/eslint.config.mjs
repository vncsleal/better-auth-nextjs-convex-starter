import baseConfig from "@repo/eslint-config/next.js";

const eslintConfig = [
  ...baseConfig,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
