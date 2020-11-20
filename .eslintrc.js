module.exports = {
  root: true,
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
    'prettier/vue',
  ],
  plugins: ['vue', 'prettier'],
}
