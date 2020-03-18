module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    "THREE": 'true'
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
}
