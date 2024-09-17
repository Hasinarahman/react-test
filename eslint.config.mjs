export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    "extends": [
      "airbnb-base",  // If using base (no React)
      "plugin:react/recommended"
    ],
    "plugins": [
      "react"
    ],
    "rules": {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
];
