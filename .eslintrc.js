module.exports = {
  extends: '@codeday',
  globals: { fetch: false },

  rules: {
    'import/no-missing-require': ['off'],
    'import/no-unresolved': ['off'],
    'require-jsdoc': ['off'],
    'import/prefer-default-export': ['off'],
  }
};
