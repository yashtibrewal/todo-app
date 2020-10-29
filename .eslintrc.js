module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  "rules": {
    "camelcase": [
      2,
      {
        "properties": "never",
        "ignoreDestructuring": true
      }],
    "valid-jsdoc": [
      "error",
      {
        "requireParamType": false,
        "requireReturnType": false,
        "requireParamDescription": false,
        "requireReturn": false,
      }]
  }
};
